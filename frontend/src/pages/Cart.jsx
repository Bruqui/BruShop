import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Titles from '../components/Titles';

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
        <div>
            <div>
                <div>
                    <div>
                        <Titles title1={"Cart"} title2={"List"} title1Styles={'h3'} />
                        <h5>({getCartCount()})</h5>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Cart;