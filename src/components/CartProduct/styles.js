import styled from "styled-components";

export const Container = styled.div`
    border: solid 1px gray;
    background-image: linear-gradient(white 50%, lightgray);
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;  

    padding: 15px;
    width: 15vw;
    height: 30vh;
    position: relative;
    

`

export const ProductName = styled.div`

    text-align: center;
    max-height: 30px;
    /* margin-bottom: 7px; */
    overflow: hidden;
`

export const ProductPrice = styled.div`

`

export const Price = styled.h2`
    color:  #006400;
`


export const QtyControllers = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 80%;

`

export const Buttons = styled.button`
    padding: 2px;
    border: 1px solid green;
    border-radius: 20px;
    width: 40px;
    font-size: large;
    cursor: pointer;
    
    :hover{
        background-color: green;
        color: white;
    }

    
`

export const InputQty = styled.input`
    width: 50px;
    border: 1px solid black;

`

export const Remove = styled.button`
        cursor: pointer;
    padding: 5px;
    border: solid 1px green;
    border-radius: 20px ;
    color: green;
    
    :hover{
        background-color: lightgreen;
        color: darkgreen;
        border-color:lightgreen;
        font-size: 1em;
        transition: 100ms;
    }
`

export const ProductQty = styled.div`
    background-color: green;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 5px;
    border-radius: 50%;
    color: white;
    


`