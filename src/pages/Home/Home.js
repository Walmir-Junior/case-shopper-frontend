import React, { useState } from "react";
import CardProduct from "../../components/CardProduct/CardProduct";
import useRequestData from "../../hooks/useRequestData";
import { Container, ContainerProducts, FilterContainer, PriceFilterContainer, PriceInput, QueryInput, TitleContainer } from "./styled";
import { BASE_URL } from "../../constants/constants"
import Header from "../../components/Header/Header";
import { goToCart, goToStock } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom";
import useForm from "../../hooks/useForm";

const Home = () => {

    const navigate = useNavigate()

    const [form, onChange] = useForm({
        maxPrice: "",
        minPrice: "",
        input: ""
    })

    
    const getProducts = useRequestData(`${BASE_URL}/products`)

    const renderProducts = getProducts && getProducts
    // analise
        .filter((product) => {
            return form.maxPrice === "" || product.price <= form.maxPrice
        })
        .filter((product) => {
            return form.minPrice === "" || product.price >= form.minPrice
        })
        .filter((product) => {
            return product.name.toLowerCase().includes(form.input.toLowerCase())
        })
        .map((product) => {
            return (
                <CardProduct
                    key={product.id}
                    product={product}
                />
            )
        })

    return (
        <>
            <Header
                onClick1={() => goToStock(navigate)}
                actionName1={"Ver estoque"}
                onClick2={() => goToCart(navigate)}
                actionName2={"Carrinho"}
            />
            <Container>

                <TitleContainer>
                    <h2>BOAS COMPRAS!</h2>
                </TitleContainer>

                <FilterContainer>
                    
                    <QueryInput
                        placeholder="Busque seu produto"
                        name="input"
                        value={form.input}
                        onChange={onChange}
                    />

                    <PriceFilterContainer>
                        
                    <PriceInput
                        type="number"
                        min="2"
                        placeholder="preço maximo"
                        name="maxPrice"
                        value={form.maxPrice}
                        onChange={onChange}
                    />

                    <PriceInput
                        type="number"
                        max="42"
                        placeholder="preço minimo"
                        name="minPrice"
                        value={form.minPrice}
                        onChange={onChange}
                    />

                    </PriceFilterContainer>
                    
                </FilterContainer>


                <ContainerProducts>
                    {renderProducts}
                </ContainerProducts>

            </Container>

        </>

    )
}

export default Home