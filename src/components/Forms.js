import { useState } from "react";
import styled from "styled-components";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Forms({ids, title, date, time, chairs}) {

  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");

  function submitData(event) {
    event.preventDefault();

    let postObject={
        ids: ids,
        name: name,
        cpf: CPF
    };
    
    const promise=axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",postObject);

    promise.then(resposta => {
        setName("");
        setCPF("");
        navigate("/sucesso", { state: { name:name , cpf:CPF, title:title , date:date , time:time, chairs: chairs } });
    });
  }

  return (
    <FormsContainer>
      <Container>
        Nome do comprador
        <input
            type="text"
            placeholder="Digite seu nome..."
            onChange={(e) => setName(e.target.value)}
            value={name}
        />
      </Container>
      <Container>
        CPF do comprador
        <input
            type="text"
            placeholder="Digite seu CPF..."
            onChange={(e) => setCPF(e.target.value)}
            value={CPF}
        />
      </Container>
      <OrangeBox onClick={submitData}>
        Reservar assento(s)
      </OrangeBox>
    </FormsContainer>  
  );
}

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
const FormsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    justify-content: space-around;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;

    color: #293845;
    margin: 20px;

` ;

const Container = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 100%;
` ;
