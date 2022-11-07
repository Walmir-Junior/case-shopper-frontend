import React from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "../../components/CartEmpty/style"
import { goToHome } from "../../routes/coordinator"
import { Container } from "./styles"

const NotFound = () => {
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Ops.... página não encontrada</h1>
            <h4>Para continuar suas compras, clique no botão abaixo</h4>
            <Button onClick={() => goToHome(navigate)}>CLIQUE AQUI</Button>
        </Container>
    )
}

export default NotFound