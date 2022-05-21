import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieSelect from "./MovieSelect";
import TimeSelect from "./TimeSelect";
import ChairSelect from "./ChairSelect";
import Success from "./Success";

export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MovieSelect/>} />
                <Route path="/sessoes/:id" element={<TimeSelect/>} />
                <Route path="/assentos/:idSessao" element={<ChairSelect/>} />
                <Route path="/sucesso" element={<Success/>} />
            </Routes>
        </BrowserRouter>

    );
}

