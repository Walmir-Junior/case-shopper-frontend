import React, { useState } from "react"
import { BASE_URL } from "../../constants/constants"
import { ContainerProduct, Container, TitleContainer } from "./styled"
import CardStock from "../../components/CardStok/CardStock"
import useRequestData from "../../hooks/useRequestData";
import Header from "../../components/Header/Header";
import { goToCart, goToHome } from "../../routes/coordinator";
import { useNavigate } from "react-router-dom";
import { FilterContainer, PriceFilterContainer, PriceInput, QueryInput } from "../Home/styled";
import useForm from "../../hooks/useForm";


const Stock = () => {


    const [form, onChange] = useForm({
        maxQty: "",
        minQty: "",
        input: ""
    })

    const navigate = useNavigate()

    const products = useRequestData(`${BASE_URL}/products`)

    const renderProducts = products && products
        .filter((product) => {
            return form.maxQty === "" || product.qty_stok <= form.maxQty
        })
        .filter((product) => {
            return form.minQty === "" || product.qty_stok >= form.minQty
        })
        .filter((product) => {
            return product.name.toLowerCase().includes(form.input.toLowerCase())
        })
        .map((product) => {
            return (
                <CardStock
                    key={product.id}
                    product={product}
                />
            )
        })


    return (

        <>
            <Header
                onClick1={() => goToHome(navigate)}
                actionName1={"Home"}
                onClick2={() => goToCart(navigate)}
                actionName2={"Carrinho"}
            />
            <Container>

                <TitleContainer>
                    <h2>Estoque</h2>
                </TitleContainer>

                <FilterContainer>

                    <QueryInput
                        placeholder="Busque seu produto"
                        value={form.input}
                        name="input"
                        onChange={onChange}
                    />

                    <PriceFilterContainer>

                        <PriceInput
                            type="number"
                            placeholder="Max quantidade"
                            value={form.maxQty}
                            name="maxQty"
                            onChange={onChange}
                        />

                        <PriceInput
                            type="number"
                            placeholder="Min quantidade"
                            value={form.minQty}
                            name="minQty"
                            onChange={onChange}
                        />

                    </PriceFilterContainer>

                </FilterContainer>

                <ContainerProduct>
                    {renderProducts}
                </ContainerProduct>

            </Container>

        </>

    )
}

export default Stock