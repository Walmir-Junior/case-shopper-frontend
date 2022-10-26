import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(lightgreen, white);

`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    margin-top: 7%;


`

export const Title = styled.h1`
    color: green;
    font-size: 5em;

`

export const Subtitle = styled.h3`
    color: green;
    font-size: 3em;

`

export const Button = styled.button`
    cursor: pointer;
    padding: 20px;
    font-size: 3em;
    border-radius: 30px;
    border: none;
    background-color: darkorange;
    color: white;
    :hover{
        background-color: orange;
        font-size: 3.5em;
        transition: 100ms;
    
    }
`