import React, { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
//imports do componentes - PÁGINAS 
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProdutoPage from "./pages/ProdutoPage/ProdutoPage";
import MeusPedidos from "./pages/MeusPedidosPage/MeusPedidosPage";
import Importante from "./pages/ImportantePage/ImportantePage"
import Nav from "./components/Nav/Nav"

import { ThemeContext } from "./context/ThemeContext"

const Rotas = () => {
    return (<BrowserRouter>


        <Nav />
        <Routes>
            <Route element={<HomePage />} path={"/"} exact />
            <Route element={<ProdutoPage />} path={"/produtos"} />
            <Route element={<Importante />} path={"/importante"} />
            <Route element={<MeusPedidos />} path={"/meus-pedidos"} />
            <Route element={<HomePage />} path={"*"} />
            <Route element={<LoginPage />} path={"/login"} />
        </Routes>

    </BrowserRouter>
    );

}

export default Rotas;