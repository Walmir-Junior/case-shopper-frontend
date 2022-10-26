import styled from "styled-components"

export const Container = styled.header`
    background-image: linear-gradient(white 60%, lightgray);
    height: 10vh;
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-evenly;
`


export const ContainerImg = styled.div`
        display: flex;
        align-items: center;
        justify-content: flex-start;
`
export const ContainerBtn = styled.div`
    display: flex;
    align-items: center ;
    justify-content: space-evenly;
    width: 20vw;
    height: 5vh;
    
`

export const Button = styled.button`
      cursor: pointer;
    padding: 10px;
    border: solid 1px green;
    border-radius: 20px ;
    color: green;
    position: relative;

    :hover{
        background-color: lightgreen;
        color: darkgreen;
        border-color:lightgreen;    
        transition: 100ms;
        rotate: -2deg;
    }


`
export const ContainerTotalQty = styled.div`
    background-color: green;
    position: absolute;
    right: 290px;
    top: 5px;
    padding: 5px;
    border-radius: 34px;

`

export const P = styled.p`
    color: white;
    transition: all;
`