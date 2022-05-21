import styled from 'styled-components';
import React from 'react';
import {useLocation,Link} from "react-router-dom";

export default function Success(){

    const {state} = useLocation();
    const {name ,cpf, title , date ,time, chairs} = state; // Read values passed on state

    return( 
        <Container>
            <Text> Pedido feito com sucesso! </Text> 
            <Bold> Filme e sessão </Bold>
            <TextBasic> {title} <br></br> {date} {time}  </TextBasic>
            <Bold> Ingressos </Bold>
            {chairs.map((seat) => (
               <TextBasic> Assento {seat} </TextBasic>
            ))}
            <Bold> Comprador </Bold>
            <TextBasic> Nome: {name} <br></br> CPF: {cpf} </TextBasic>
            <Link style={{ textDecoration: 'none' }} to={`/`}>
                <OrangeBox>
                    Voltar pra Home
                </OrangeBox>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    margin: 20px;
    margin-top: 80px;
` ;

const OrangeBox= styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px;
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    margin-top:15px ;
`

const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;
` ;
const TextBasic = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    
    letter-spacing: 0.04em;
    color: #293845;
`
const Bold= styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    
    letter-spacing: 0.04em;
    color: #293845;
`
