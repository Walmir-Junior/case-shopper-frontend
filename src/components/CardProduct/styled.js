import styled from "styled-components"


export const Container = styled.div`
    border: solid 1px gray;
    background-image: linear-gradient(white 50%, lightgray);
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;  

    padding: 10px;
    width: 15vw;
    height: 30vh;
  
`
export const ProductName = styled.div`
   text-align: center;
   max-height: 30px;

  
   overflow: hidden;
`

export const Price = styled.h3`
    color: #006400;
`

export const Button = styled.button`
    cursor: pointer;
    padding: 10px;
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


