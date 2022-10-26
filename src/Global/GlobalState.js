import React, { useState } from "react"
import GlobalStateContext from "./GlobalContext"

const GlobalState = (props) => {


    const [cart, setCart] = useState([])


    const addProductsToCart = (product) => {


        const alreadyInTheCart = cart && cart.findIndex((productInCart) => {
            return productInCart.id === product.id ? true : false
        })


        if (alreadyInTheCart === -1) {

            const newProduct = {
                ...product,
                quantity: 1
            }

            const copyCart = [...cart, newProduct]
            setCart(copyCart)

        } else {
            const copyCart = cart && cart.map((productInCart) => {
                if (productInCart.id === product.id) {
                    if (productInCart.qty_stok > productInCart.quantity) {
                        return {
                            ...productInCart,
                            quantity: productInCart.quantity + 1
                        }
                    } else {
                        alert("produto esgotado")
                        return productInCart
                    }

                } else {
                    return productInCart
                }
            })

            setCart(copyCart)
        }
    }

    const removeProductToCart = (product) => {

        const newCartList = cart && cart.filter((productInCart) => {
            return productInCart.id !== product.id
        })

        setCart(newCartList)
    }

    const clearCart = () => {
        setCart([])
    }


    const decrementQty = (product) => {

        const copyCart = cart && cart.map((productInCart) => {

            if (productInCart.id === product.id) {
                return {
                    ...productInCart,
                    quantity: productInCart.quantity - 1
                }
            } else {
                return productInCart
            }
        })
        setCart(copyCart)
    }

    const incrementQty = (product) => {

        const copyCart = cart && cart.map((productInCart) => {
            if (productInCart.id === product.id) {
                if (productInCart.qty_stok > productInCart.quantity) {
                    return {
                        ...productInCart,
                        quantity: productInCart.quantity + 1
                    }
                } else {
                    alert("produto esgotado")
                    return productInCart
                }

            } else {
                return productInCart
            }
        })

        setCart(copyCart)
    }




    const value = {
        cart,
        addProductsToCart,
        removeProductToCart,
        decrementQty,
        incrementQty,
        clearCart
    }

    return (
        <GlobalStateContext.Provider value={value}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState
