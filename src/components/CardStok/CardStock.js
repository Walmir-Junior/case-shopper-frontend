import React from "react"
import { Cotainer, ProductNameCotainer, Qty } from "./styled"

const CardStock = ({ product }) => {
    return (
        <Cotainer>

            <ProductNameCotainer>
                <h5>{product.name}</h5>
            </ProductNameCotainer>

            <p>Quantidade em estoque:</p>

            <Qty>{product.qty_stok}</Qty>

        </Cotainer>
    )
}

export default CardStock