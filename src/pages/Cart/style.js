import styled from "styled-components";

export const Container  = styled.div`
    margin-top: 2%;
    display: grid;
    background-image: linear-gradient(lightgreen 10%, white);
    grid-template-areas: 
        "products Info Info Info Info";
    gap: 20px;


    #products{
        grid-area: products;
    }

    #Info{
        grid-area: Info;
    }

    
    `

export const ContainerCartProducts = styled.div`
    padding: 30px;
    width: 100%;
    height: 500px;
    border-radius: 50;
    padding: 20px ;


    
    display: grid;
    grid-template-columns: auto auto;
    justify-content: center;
    align-items: start;
    row-gap: 10px;
    column-gap: 10px;

    overflow-y: scroll;
    
    

`

export const ClearBtn = styled.button`
    cursor: pointer;
    padding: 10px;
    border: solid 1px green;
    border-radius: 20px ;
    color: green;
    
    :hover{
        background-color: darkgreen;
        color: white;
        border-color:lightgreen;
        font-size: 1em;
        transition: 100ms;
    }


`

export const InfoCart = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

`

export const TotalValue = styled.div`
    color: green;
`

export const Total = styled.h1`
    font-size: 5em;
`

export const  InputForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    gap:20px;


`

export const Input = styled.input`
    padding: 10px;
    width: 300px;

    border-radius: 20px;
    

`
export const  Submit = styled.button`

cursor: pointer;
    padding: 10px;
    border: solid 1px green;
    border-radius: 20px ;
    color: green;
    width: 200px;
    height: 70px;
    
    :hover{
        background-color: lightgreen;
        color: darkgreen;
        border-color:lightgreen;
        font-size: 1em;
        transition: 100ms;
    }
`
