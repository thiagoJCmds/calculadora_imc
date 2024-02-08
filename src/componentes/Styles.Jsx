import styled from "styled-components"

export const Formulario = styled.form`
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;

`

export const Titulo = styled.h1`

    color: #fff;
    margin-top: 180px;
    margin-bottom: 30px;
    font-family:'Shrikhand', sans-serif;
    font-weight: 100;
    font-size: 35px;

`
export const Box = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: ${(prop) => prop.top};
`
export const Input =styled.input`
    display: block;
    text-align: center;
    height: 30px;
    border-radius: 5px;
    margin: 20px 0;
    cursor: pointer;
`
export const Descricao = styled.label`
    color: #fff;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'Shrikhand', serif;
    font-weight: 100;
`
export const Botao = styled.button`
    height: 30px;
    width: 120px;
    margin-bottom: 30px;
    margin-right: ${(prop) => prop.margin};
    font-weight: bold;
    border-radius: 8px;
`

export const Paragrafo = styled.p`
    background-color:  ${(prop) => prop.cor};
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    color: #fff;
    font-size: 30px;
    height: 35px;
    width: 300px;
    font-weight: bold;
    border-radius: 5px;
`

