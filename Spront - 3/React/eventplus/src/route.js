import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import EventosPage from "./pages/EventosPage/EventosPage";
import TiposEventosPages from "./pages/TiposEventosPage/TiposEventosPage"
import TestePage from './pages/Teste/TestePage';


const Rotas = () => {
    return (
        <div>
           <BrowserRouter>
            <Routes>
                <Route element={<HomePage />} path={"/"} exact />
                <Route element={<LoginPage />} path={"/login"} />
                <Route element={<EventosPage />} path={"/eventos"} />
                <Route element={<TiposEventosPages />} path={"/tipo-eventos"} />
                <Route element={<TestePage />} path={"/teste"} />
            </Routes>
           </BrowserRouter>
        </div>
    );
};

export default Rotas;