import React, { createContext, useEffect, useState } from 'react'
import { all_products } from '../assets/data'

export const ShopContext = createContext(null)


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({})
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

    useEffect(() => {
        console.log(cartItems)
    }, [cartItems])

    const contextValue = { all_products, cartItems, setCartItems, addToCart, removeFromCart, getTotalCartAmount }

  return (
    <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider
