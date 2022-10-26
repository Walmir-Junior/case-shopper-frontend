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

export const ContainerProduct = styled.div`
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