import React, { useContext } from "react"
import { Button, Container, ContainerBtn, ContainerImg, ContainerTotalQty, P } from "./stylesd"
import logo from "../../assets/logo.png"
import GlobalStateContext from "../../Global/GlobalContext"

const Header = ({ onClick1, onClick2, actionName1, actionName2 }) => {

    const { cart } = useContext(GlobalStateContext)

    const showQtyIncart = () => {

        if ( cart && cart.length > 0) {
            const qty = cart.map((product) => {
                return product.quantity
            })

            const sumQty = qty.reduce((sum, i) => {
                return sum + i
            })

            return sumQty
        }

        return 0
    }


    return (
        <Container>
            <ContainerImg>
                <img src={logo} alt="logo" />
            </ContainerImg>

            <ContainerBtn>

                <Button onClick={onClick1}>{actionName1}</Button>
                <Button onClick={onClick2}>{actionName2}</Button>
                <ContainerTotalQty>
                    <P>{showQtyIncart()}</P>
                </ContainerTotalQty>

            </ContainerBtn>

        </Container>
    )
}

export default Header