import React, { useContext } from 'react';
import { ThemeContext, } from '../../context/ThemeContext';

const LoginPage = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <div>
        <h1>Pagina do Login</h1>
            <span>{theme}</span>
        </div>
    );
};

export default LoginPage;