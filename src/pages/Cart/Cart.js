import React, { useContext } from "react"
import GlobalStateContext from "../../Global/GlobalContext"
import Header from "../../components/Header/Header"
import { ClearBtn, Container, ContainerCartProducts, InfoCart, Input, InputForm, Submit, Total, TotalValue } from "./style"
import CartProduct from "../../components/CartProduct/CartProduct"
import { useNavigate } from "react-router-dom"
import { goToHome, goToStock } from "../../routes/coordinator"
import useForm from "../../hooks/useForm"
import axios from "axios"
import { BASE_URL } from "../../constants/constants"



const Cart = () => {

    const navigate = useNavigate()
    const { cart, clearCart } = useContext(GlobalStateContext)
    const [form, onChange, cleanFields] = useForm({
        custumerName: "",
        dueDate: "",
    })


    const renderProductsInCart = cart && cart.map((product) => {

        return (
            <CartProduct
                key={product.id}
                product={product}
            />
        )
    })

    const calcTotalPrice = () => {

            const itemsTotalPrice = cart && cart.map((item) => {
                return item.price * item.quantity
            })

            const cartTotalPrice = itemsTotalPrice.reduce((sum, i) => {
                return sum + i
            })

            return (`R$ ${cartTotalPrice.toFixed(2)}`)

    }

    const createRequest = (event) => {

        event.preventDefault()

        const requestList = cart && cart.map((puchase) => {
            console.log(typeof (puchase.id))
            return (
                {
                    productId: puchase.id,
                    productQty: puchase.quantity
                }
            )
        })

        const requests = {
            ...form,
            purchasesList: requestList
        }

        console.log(form)

        axios.post(`${BASE_URL}/requests`, requests)
            .then(res => alert("pedido concluido com sucesso"))
            .catch(err => console.log(err.response.data))

        cleanFields()
        clearCart()

    }




    return (
        <>
            <Header
                onClick2={() => goToStock(navigate)}
                actionName2={"Ver estoque"}
                onClick1={() => goToHome(navigate)}
                actionName1={"Home"}
            />
            <Container>

                <ContainerCartProducts id="products">
                    {renderProductsInCart}
                </ContainerCartProducts>

                <InfoCart id="Info">
                    <ClearBtn onClick={clearCart}>Esvaziar Carrinho</ClearBtn>

                    <TotalValue >
                        <h3>Valor Total:</h3>
                        <Total>{calcTotalPrice()}</Total>
                    </TotalValue>

                    <form onSubmit={createRequest}>
                        <InputForm>
                            <Input
                                placeholder="seu nome..."
                                name="custumerName"
                                value={form.custumerName}
                                onChange={onChange}
                                required
                                disabled={cart.length === 0}
                            />

                            <Input
                                type="date"
                                placeholder="dd/mm/aaaa"
                                name="dueDate"
                                value={form.dueDate}
                                onChange={onChange}
                                required
                                disabled={cart.length === 0}
                            />

                            <Submit
                                disabled={cart.length === 0}
                            >
                                Finalizar compra
                            </Submit>
                        </InputForm>

                    </form>

                </InfoCart>

            </Container>

        </>

    )
}

export default Cart