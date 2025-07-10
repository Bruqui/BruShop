import React, { createContext, useEffect, useState } from 'react';
import { products } from '../assets/data';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const [search, setSearch] = useState("");
    const [cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    const currency = "$";
    const delivery_charges = 10;

    // ADDING ITEMS TO CART
    const addToCart = async (itemId, color) => {
        if (!color) {
            toast.error("Please select the color first.");
            return;
        }

        // Deep clone cartItems (you can use structuredClone if supported)
        const cartData = JSON.parse(JSON.stringify(cartItems));

        if (cartData[itemId]) {
            if (cartData[itemId][color]) {
                cartData[itemId][color] += 1;
            } else {
                cartData[itemId][color] = 1;
            }
        } else {
            cartData[itemId] = { [color]: 1 };
        }

        setCartItems(cartData);
    };

    // GETTING TOTAL CART COUNT
    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            const colors = cartItems[itemId];
            for (const color in colors) {
                const quantity = colors[color];
                if (quantity > 0) {
                    totalCount += quantity;
                }
            }
        }
        return totalCount;
    };

    useEffect(() => {
        // Debug log for development
        console.log("Cart Items Updated:", cartItems);
    }, [cartItems]);

    const value = {
        products,
        search,
        setSearch,
        currency,
        delivery_charges,
        cartItems,
        setCartItems,
        addToCart,
        getCartCount
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
