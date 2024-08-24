import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ShopContext = createContext(null)


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
    const url = 'http://localhost:4000';
    const [token, setToken] = useState("");
    const [all_products, setAll_products] = useState([]);

    const addToCart = async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems((prev) =>({...prev, [itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
        }

    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1 }))

    }

    const getTotalCartAmount = () => {
        let totalAmout = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0) {
                let itemInfo = all_products.find((product) => product._id === item)
                totalAmout += itemInfo.price * cartItems[item]
            }
        }
        return totalAmout
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for(const item in cartItems){
            totalItems += cartItems[item];
        }
        return totalItems;
    }

    const fetchProductsList = async() => {
        const response = await axios.get(url + "/api/product/list");
        setAll_products(response.data.data);
    }

    useEffect(() => {
        async function loadData() {
            await fetchProductsList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    }, [])

    const contextValue = { 
        all_products, 
        cartItems, 
        setCartItems, 
        addToCart, 
        removeFromCart, 
        getTotalCartAmount, 
        url, 
        token, 
        setToken, 
        getTotalCartItems 
    }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
