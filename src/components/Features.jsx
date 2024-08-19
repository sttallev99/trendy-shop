import React from 'react'
import {LiaShippingFastSolid} from 'react-icons/lia'
import {MdCurrencyExchange} from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
import { FaBoxOpen } from "react-icons/fa6";

const Features = () => {
  return (
    <section className='max-padd-container bg-primary mt-16 xl:mt-18 py-8 rounded-xl'>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8'>
        <div className='flexCenter gap-x-4'>
          <LiaShippingFastSolid className="text-4xl"/>
          <div>
            <h5 className='medium-18'>Free Shipping</h5>
            <p>On above $100 order</p>
          </div>
        </div>
        <div className='flexCenter gap-x-4'>
          <MdCurrencyExchange className="text-4xl"/>
          <div>
            <h5 className='medium-18'>Exchange & Returns</h5>
            <p>Cancel your order or exchange ourchased products.</p>
          </div>
        </div>
        <div className='flexCenter gap-x-4'>
          <BiSupport className="text-4xl"/>
          <div>
            <h5 className='medium-18'>Need help?</h5>
            <p>Contact us at: xxxxxxx</p>
          </div>
        </div>
        <div className='flexCenter gap-x-4'>
          <FaBoxOpen className="text-4xl"/>
          <div>
            <h5 className='medium-18'>Preview and test</h5>
            <p>Before Payment</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
