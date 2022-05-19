import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import MovieSelect from "./MovieSelect";
import TimeSelect from "./TimeSelect";
import SessionSelect from "./TimeSelect";
import Success from "./Success";

export default function App(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<MovieSelect/>} />
                <Route path="/sessoes/:id" element={<TimeSelect/>} />
                {/* 
                <Route path="/sessao:id" element={<SessionSelect/>} />
                <Route path="/sucesso" element={<Success/>} /> */}
            </Routes>
        </BrowserRouter>

    );
}

