import React from "react"
import { useNavigate } from "react-router-dom"
import { goToHome, goToStock } from "../../routes/coordinator"
import Header from "../Header/Header"
import { Button, Container, Content, Subtitle, Title } from "./style"

const CartEmpty = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <Header
                onClick2={() => goToStock(navigate)}
                actionName2={"Ver estoque"}
                onClick1={() => goToHome(navigate)}
                actionName1={"Home"}
            />

            <Content>
                <Title>Carrinho vazio</Title>
                <br />
                <br />
                <Subtitle>Vá as compras!</Subtitle>
                <br />
                <br />
                <br />
                <Button onClick={() => goToHome(navigate)}>
                    <b>
                        COMPRAR
                    </b>
                </Button>

            </Content>
        </Container>
    )
}

export default CartEmpty