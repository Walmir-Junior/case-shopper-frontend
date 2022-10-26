import styled from "styled-components";

export const Cotainer = styled.div`
    border: solid 1px gray;
    background-image: linear-gradient(white 50%, lightgray);
    border-radius: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 
    cursor: default; 

    padding: 10px;
    width: 15vw;
    height: 30vh;

    :hover{
        border: solid 2px green;
    }

`
export const ProductNameCotainer = styled.div`
      text-align: center;
      max-height: 30px;
      

   overflow: hidden;

` 
export const Qty = styled.h1`
    color: #006400;
   
`

