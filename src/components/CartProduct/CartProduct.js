import React, { useContext} from "react";
import GlobalStateContext from "../../Global/GlobalContext";
import { Buttons, Container, Price, ProductName, ProductPrice, ProductQty, QtyControllers, Remove } from "./styles";

const CartProduct = ({product}) => {
  
  const {cart, removeProductToCart, decrementQty,incrementQty} = useContext(GlobalStateContext)

  

    return (
        <Container>
            
            <ProductName>
                <h5>{product.name}</h5>
            </ProductName>

            <ProductPrice>
                <Price>R${product.price}</Price>
            </ProductPrice>

            <QtyControllers>
                <Buttons 
                onClick={() => decrementQty(product)} 
                disabled={product.quantity === 1}
                > 
                - 
                </Buttons>

                <Remove onClick={() => removeProductToCart(product)}>Remover</Remove>
                
                <Buttons 
                onClick={() => incrementQty(product)}
                > 
                + 
                </Buttons>
    
            </QtyControllers>

            <ProductQty> 
                <h5>{product.quantity}</h5>
            </ProductQty>
        </Container>
    )
}

export default CartProduct