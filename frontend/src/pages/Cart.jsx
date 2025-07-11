import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titles from '../components/Titles';
import { FaRegWindowClose } from 'react-icons/fa';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import CartTotal from '../components/CartTotal';
import Footer from '../components/Footer';

const Cart = () => {
    const { products, currency, cartItems, getCartCount } = useContext(ShopContext);

    const [cartData, setCartData] = useState([])
    const [quantities, setQuantities] = useState({})


    useEffect(() => {
        if (products.length > 0) {
            const tempData = []
            const initialQuantities = {}
            for (const items in cartItems) {
                for (const item in cartItems[items]) {
                    if (cartItems[items][item] > 0) {
                        tempData.push({
                            _id: items,
                            color: item,
                            quantity: cartItems[items][item]
                        })
                        initialQuantities[`${item}-${item}`] = cartItems[items][item]
                    }
                }
            }
            setCartData(tempData);
            setQuantities(initialQuantities);
        }
    }, [cartItems, products]);

    return (
        <section>
            <div className='bg-primary'>
                <div className='max-padd-container py-10'>
                    {/** TITLES */}
                    <div className='flexStart gap-x-4'>
                        <Titles title1={"Cart"} title2={"List"} title1Styles={'h3'} />
                        <h5 className='medium-15 text-gray-30 relative'>
                            ({getCartCount()} Items)
                        </h5>
                    </div>
                    {/** CONTAINER */}
                    <div>
                        {cartData.map((item, i) => {
                            const productData = products.find((product) => product._id === item._id)
                            const key = `${item._id}-${item.color}`
                            return (
                                <div key={i}>
                                    <div>
                                        <div>
                                            <img src={productData.image[0]} alt="productImg" className='w-20 sm:w-18 rounded' />
                                        </div>
                                        <div>
                                            <div>
                                                <h5>{productData.name}</h5>
                                                <FaRegWindowClose />
                                            </div>
                                            <p>{item.color}</p>
                                            <div>
                                                <div>
                                                    <button>
                                                        <FaMinus />
                                                    </button>
                                                    <p>{quantities[key]}</p>
                                                    <button>
                                                        <FaPlus />
                                                    </button>
                                                </div>
                                                <h4>{currency}{productData.price}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <div>
                            <CartTotal />
                            <button>Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    )
};

export default Cart;