import  { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body{
    background-image: linear-gradient(to right, #E65763, #34073D) ;
  }

  input{
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    height: 30px;
    margin: 20px 0;
    text-align: center;
  }
`


