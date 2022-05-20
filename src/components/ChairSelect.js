import styled from 'styled-components';
import axios from 'axios';
import { useParams , Link } from "react-router-dom";
import React, { useEffect } from 'react';
import Times from './Times';

export default function ChairSelect({idSessao}){
    let params = useParams();
    console.log("params.idSessão: "+params.idSessao);

    return(
        <h1>Loading...</h1>
    )
}