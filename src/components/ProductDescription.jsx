import React from 'react'

export const ProductDescription = () => {
  return (
    <div className='max-padd-description mt-20'>
        <div className='flex gap-3 mb-4'>
            <button className='btn-dark rounded-sm !text-xs !py-[6px] w-36'>Description</button>
            <button className='btn-outline rounded-sm !text-xs !py-[6px] w-36'>Care Guide</button>
            <button className='btn-outline rounded-sm !text-xs !py-[6px] w-36'>Size Guide</button>
        </div>
        <div className='flex flex-col pb-16'>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae odit dignissimos 
            quaerat labore voluptates provident quos, dolores, molestias, nostrum tempora cum. Rem, 
            laudantium dolores quibusdam iusto amet harum distinctio debitis delectus! Aperiam, architecto 
            laborum dolorum cum consequuntur quibusdam eveniet libero ab.</p>
            <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae odit dignissimos 
            quaerat labore voluptates provident quos, dolores, molestias, nostrum tempora cum. Rem, 
            laudantium dolores quibusdam iusto amet harum distinctio debitis delectus! Aperiam, architecto 
            laborum dolorum cum consequuntur quibusdam eveniet libero ab.</p>
        </div>
    </div>
  )
}
