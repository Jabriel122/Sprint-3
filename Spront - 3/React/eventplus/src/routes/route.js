import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import EventosPage from "../pages/EventosPage/EventosPage";
import TiposEventosPages from "../pages/TiposEventosPage/TiposEventosPage"
import TestePage from '../pages/TestePage/TestePage';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { PrivateRoute } from './PriveteRoute';
import EventosAlunoPage from '../pages/EventosAlunoPage/EventosAlunoPage';
// import DetalheEvento from '../pages/DetalheEvento/DetalheEvento';
import DetalheEventoPage from '../pages/DetalheEventoPage/DeatlheEventoPage';


const Rotas = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route element={<HomePage />} path={"/"} exact />
                    <Route element={<LoginPage />} path={"/login"} />
                    <Route element={<PrivateRoute redirectTo='/'><EventosPage /></PrivateRoute>} path={"/eventos"} />
                    <Route element={<PrivateRoute redirectTo='/'><EventosAlunoPage /></PrivateRoute>} path={"/eventos-aluno"} />
                    <Route element={<DetalheEventoPage />} path="/detalhes-evento/:idEvento"/>
                    <Route element={<TestePage/>}/> path={"/Teste/:idEvento"}
                    <Route
                        element={
                            <PrivateRoute redirectTo='/'>
                                <TiposEventosPages />
                            </PrivateRoute>
                        } path={"/tipo-eventos"} />
                    <Route element={<TestePage />} path={"/teste"} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default Rotas;