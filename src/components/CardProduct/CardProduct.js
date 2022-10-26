import React, { useContext } from "react";
import GlobalStateContext from "../../Global/GlobalContext";
import { Button, Container, Price, ProductName } from "./styled";



const CardProduct = ({ product }) => {
    const { addProductsToCart } = useContext(GlobalStateContext)


    return (
        <Container> 

            <ProductName>
                <h5>{product.name}</h5>
            </ProductName>

            <Price>R${product.price}</Price>


            <Button onClick={() => addProductsToCart(product)}><b>Adicionar</b></Button>

        </Container>
    )
}

export default CardProduct