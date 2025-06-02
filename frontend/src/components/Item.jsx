import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
  return (
    <div className='overflow-hidden'>
        {/* IMAGE */}
        <Link to={"/"}>
            <img src={product.image[0]} alt="productImg" className='flexCenter p-2 bg-[#f5f5f5] overflow-hidden relative' />
        </Link>
        {/* INFO */}
        <div>
            <h4>{product.name}</h4>
            <div>
                <p>{product.category}</p>
                <h5>${product.price}.00</h5>
            </div>
            <p>{product.description}</p>
        </div>
    </div>
  )
}

export default Item