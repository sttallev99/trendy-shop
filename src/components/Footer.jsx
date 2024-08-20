import React from 'react'
import { Link } from 'react-router-dom'
import SocialIcons from './SocialIcons'

const Footer = () => {
  return (
    <footer id='contact' className='bg-tertiary max-padd-container text-white py-12'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {/*logo and description*/}
        <div className='flex flex-col items-center md:items-start'>
          <Link to={'/'} className='bold-24 mb-4'>
            <h3>Trendy<span className='text-secondary'>Store</span></h3>
            <p className='text-center md:text-left'>Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Quod, iusto odio ullam, porro ipsam velit vel, 
            possimus obcaecati blanditiis eius in.</p>
          </Link>
        </div>
        {/*Quick links*/}
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='bold-20 mb-4'>Quick Links</h4>
          <ul className='space-y-2 regular-15 text-gray-30'>
            <li><a href="" className='hover:text-secondary'>Home</a></li>
            <li><a href="" className='hover:text-secondary'>Catalog</a></li>
            <li><a href="" className='hover:text-secondary'>Shop</a></li>
            <li><a href="" className='hover:text-secondary'>Contact Us</a></li>
          </ul>
        </div>
        <div className='flex flex-col items-center md:items-start'>
          <h4 className='tect-lg mb-4'>Contact Us</h4>
          <p>Email: <a href="" className='hover:text-secondary'>support@trendy-store.com</a></p>
          <p>Phone: <a href="" className='hover:text-secondary'>+1234567890</a></p>
          <p>Address: 123 Trendy Street City, Contry</p>
        </div>
      </div>
      <div className='flex flex-col items-center mt-8'>
        <SocialIcons />
        <hr className='h-[1px] w-full border-white'/>
        <p className='text-center text-sm'>&copy; {new Date().getFullYear} TrendyStore | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
