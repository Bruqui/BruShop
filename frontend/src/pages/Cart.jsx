import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Cart = () => {
    const { products, currency, cartItems } = useContext(ShopContext);

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
            console.log(tempData);
        }
    }, [cartItems])

    return <div>Cart</div>
};


export default Cart;