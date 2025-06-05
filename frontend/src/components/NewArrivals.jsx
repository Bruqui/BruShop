import React, { useContext, useEffect, useState } from 'react'
import Titles from './Titles'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
// Import required modules
import { Autoplay } from 'swiper/modules'
import Item from './Item'
import { products } from "../assets/data"
import { ShopContext } from '../context/ShopContext'

const NewArriwals = () => {
  const { products } = useContext(ShopContext)
  const [PopularProducts, setPopularProducts] = useState([])

  useEffect(() => {
    const data = products.slice(0, 7);
    setPopularProducts(data)
  }, [products])

  return (
    <section className=' max-padd-container pt-16'>
      <Titles title1={'New'} title2={'Arrivals'} titleStyles={'pb-10'} paraStyles={'!block'} />
      {/* CONTAINER */}
      <Swiper
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          666: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          900: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1300: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
        }}
        modules={[Autoplay]}
        className='h-[399px]'
      >
        {PopularProducts.map((product) => (
          <SwiperSlide key={product._id}>
            <Item product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default NewArriwals