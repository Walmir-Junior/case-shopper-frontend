import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalContext";
import Cart from "../../pages/Cart/Cart";
import CartEmpty from "../CartEmpty/CartEmpty";

const StatusCart = () => {

    const {cart} = useContext(GlobalStateContext)
    //refatorar
    const renderCurrentPage = () => {
        if(cart.length === 0){
            return <CartEmpty/>
        } else {
            return <Cart/>
        }
    }
    
    return(
        <>
            {renderCurrentPage()}
        </>
    )
}

export default StatusCart
