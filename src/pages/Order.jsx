import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Order = () => {
  const {getTotalCartAmount} = useContext(ShopContext);

  return (
    <section className='max-padd-container py-28 xl:py-32'>
      <form action="" className='flex flex-col xl:flex-row gap-20 xl:gap-28'>
        {/*deliery information*/}
        <div className='flex flex-1 flex-col gap-3 text-[95%]'>
          <h3 className='bold-28 mb-4'>Delivery Information</h3>
          <div className='flex gap-3'>
            <input 
              type="text" 
              name='firstName' 
              placeholder='First Name' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
            <input 
              type="text" 
              name='firstName' 
              placeholder='First Name' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
          </div>
          <input 
            type="email" 
            name='email' 
            placeholder='Email' 
            className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'
            required
          />
          <input 
            type="text" 
            name='phone' 
            placeholder='Phone Number' 
            className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'
            required
          />
          <input 
            type="text" 
            name='street' 
            placeholder='Street' 
            className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none'
            required
          />
          <div className='flex gap-3'>
            <input 
              type="text" 
              name='city' 
              placeholder='City' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
            <input 
              type="text" 
              name='state' 
              placeholder='State' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
          </div>
          <div className='flex gap-3'> 
            <input 
              type="text" 
              name='zipcode' 
              placeholder='Zip Code' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
            <input 
              type="text" 
              name='country' 
              placeholder='Country' 
              className='ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2'
              required
            />
          </div>
        </div>
        <div className='flex flex-col xl:flex-row gap-20 mt-20'>
            <div className='flex flex-1 flex-col gap-2'>
              <h4 className='bold-22'>Summary</h4>
              <div>
                <div className='flexBetween py-3'>
                  <h4 className='medium-16'>Subtotal:</h4>
                  <h4 className='text-gray-30 font-semibold'>${getTotalCartAmount()}</h4>
                </div>
                <hr className='h-[2px] bg-slate-900/15'/>
                <div className='flexBetween py-3'>
                  <h4 className='medium-16'>Shipping Fee:</h4>
                  <h4 className='text-gray-30 font-semibold'>${getTotalCartAmount() === 0 ? 0 : 2}</h4>
                </div>
                <hr className='h-[2px] bg-slate-900/15'/>
                <div className='flexBetweeen py-3'>
                  <h4 className='medium-16'>Total:</h4>
                  <h4 className='bold-18'>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h4>
                </div>
              </div>
              <button onClick={() => navigate("/order")} className='btn-secondary w-52 rounded'>
              Proceed to Checkout
              </button>
            </div>
        </div>
      </form>
    </section>
  )
}

export default Order
