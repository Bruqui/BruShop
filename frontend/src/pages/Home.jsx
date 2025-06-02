import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import NewArriwals from '../components/NewArriwals'
import PopularProducts from '../components/PopularProducts'
import Banner from '../components/Banner'
import About from '../components/About'
import Blog from './Blog'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
        <Hero />
        <Features />
        <NewArriwals />
        <PopularProducts />
        <Banner />
        <About />
        <Blog />
        <NewsLetter />
        <Footer />
    </>
  )
}

export default Home