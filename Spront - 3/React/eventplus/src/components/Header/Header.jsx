import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Link  to ="/" > Home </Link>
            <br />
            <Link  to ="/tipo-eventos"> Tipo Eventos </Link>
            <br />
            <Link  to ="/eventos"> Eventos </Link>
            <br />
            <Link  to ="/login"> Login </Link>
            <br />
            <Link  to ="/teste"> Teste </Link>
        </header>
    );
};

export default Header;