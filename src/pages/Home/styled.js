import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(lightgreen 10%, white);
`


export const TitleContainer = styled.div`
    text-align: center;
    margin: 20px 0 10px 0;
    width: 100%;

    

`

export const FilterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

`

export const PriceFilterContainer = styled.div`
    width: 400px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10px;

`

export const QueryInput = styled.input`
    width: calc(100% - 500px);
    padding: 10px;
    border-radius: 10px;
    border: none;
    
`
export const PriceInput = styled.input`
    padding: 10px;
    width: 120px;
    border-radius: 10px;
    border: none;

`

export const ContainerProducts = styled.div`         
    padding: 30px;
    width: 100%;
    border-radius: 1%; 

    
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    justify-content: center;
    align-items: end;
    row-gap: 10px;
    column-gap: 10px;
    
`
