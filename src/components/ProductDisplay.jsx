import React from 'react'
import { all_products } from '../assets/data'
import Item from './Item'

const ProductDisplay = () => {
  return (
    <section id='shop' className='max-padd-container py-16'>
        {/*title*/}
        <div className='flexBetween pb-20'>
            <h4 className='text-4xl font-extrabold leading-none font-ace flex flex-col'>
                <span className='medium-16'>see</span>
                Products
            </h4>
        </div>
        {/*container*/}
        <div className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8'>
            {all_products.map((product) => {
                return(
                    <div key={product._id}>
                        <Item product={product}/>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default ProductDisplay
