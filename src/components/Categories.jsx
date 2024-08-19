import React from 'react'
import {categories} from "../assets/data"

const Categories = () => {
  return (
    <section id='categories' className='max-padd-container pt-16'>
      {/*title*/}
      <div className='flexBetween pb-20'>
        <h4 className='text-4xl font-extrabold leading-none font-ace flex flex-col'>
          <span className='medium-16'>select</span>
          Categories
        </h4>
      </div>
      {/*container*/}
      <div className='flexStart gap-12 flex-wrap'>
        {categories.map((item) => (
          <div id={item.name} key={item.name} className='flexCenter flex-col'>
            <div className='p-8 rounded-2xl cursor-pointer bg-primary'>
              <img src={item.image} alt="categoryImg" height={155} width={155} className='object-cover h-32'/>
            </div>
            <h4 className='mt-6 medium-18'>{item.name}</h4>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Categories
