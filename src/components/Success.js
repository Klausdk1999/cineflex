import styled from 'styled-components';
import React from 'react';

export default function Success({data}){

    return( 
        <>
            <Text> Sucesso: {data.name} - {data.cpf}</Text> 
        </>
    );
}

const Text = styled.h1`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #FFFFFF;
` ;

const Container= styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    margin: 15px;
    width: 83px;
    height: 43px;
    background: #E8833A;
    border-radius: 3px;
`
