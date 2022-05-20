import { useState } from "react";
import styled from "styled-components";

export default function ContactForm() {

  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");

  function submitData(event) {
    event.preventDefault();
    alert("Mensagem enviada com sucesso!");
    setName("");
    setCPF("");
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
//   return (
//     <>
//       <form onSubmit={submitData}>
//         <FormsContainer>
//           <Container>
//             <label htmlFor="nome">Nome do comprador</label>
//             <input
//               type="text"
//               id="nome"
//               value={name}
//               required
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Container>
//           <Container>
//             <label htmlFor="CPF">CPF do comprador</label>
//             <input
//               type="CPF"
//               id="CPF"
//               value={CPF}
//               required
//               onChange={(e) => setCPF(e.target.value)}
//             />
//           </Container>
          
//             <OrangeBox type="submit">Reservar assento(s)</OrangeBox>
          
//         </FormsContainer>
//       </form>
//     </>
//   );
}

const OrangeBox= styled.button`
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
