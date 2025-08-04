"use client"

import { createContext, useContext, useState } from "react"; 

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addToCart = (produto) => {
        const produtoExistente = cart.find((item) => item._id === produto._id);
        if(produtoExistente) {
            const cartAtualizado = cart.map((item) =>
                item._id === produto._id
                    ? { ...item, quantity: item.quantity + 1} 
                    : item
            )
            setCart(cartAtualizado);
        } else{
            setCart([...cart, { ...produto, quantity: 1 }])
        }
    };

    const removeFromCart = (id) => {
        const cartAtualizado = cart.filter((item) => item._id !== id)
        setCart(cartAtualizado)
    };

    const clearCart = () => setCart([]);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext)
}
