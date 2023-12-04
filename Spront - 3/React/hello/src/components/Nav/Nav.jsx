import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Nav = () =>{
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () =>{
        const tm = theme === 'light' ? 'dark' : "light";
        setTheme(tm);
        localStorage.setItem("theme", tm);
    }
    return(
        <nav>
            <br />
            <Link to="/"> Home</Link> | &nbsp;
            <Link to="/produtos"> Produtos</Link> | &nbsp;
            <Link to="/meus-pedidos"> Meus Pedidos</Link> | &nbsp;
            <Link to="/importante">Dados importantes</Link> | &nbsp;
            <Link to="/login"> Login</Link>
            <button onClick={toggleTheme}>{theme}</button>
            
        </nav>
    );
}

export default Nav;
