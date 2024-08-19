import React, { useState } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Categories from '../components/Categories'
import ProductDisplay from '../components/ProductDisplay'

const Home = () => {
  const [category, setCategory] = useState("All")
  return (
    <>
      <Hero />
      <Features />
      <Categories category={category} setCategory={setCategory}/>
      <ProductDisplay category={category}/>
    </>
  )
}

export default Home
