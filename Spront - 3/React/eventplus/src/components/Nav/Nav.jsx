import React from 'react';
import './Nav.css'

import logoMobile from '../../assets/images/images/logo-white.svg'
import logDesktop from '../../assets/images/images/logo-pink.svg'


import { Link } from 'react-router-dom'

const Nav = ({ exibeNavbar, setExibeNavbar }) => {
    return (
        <nav className= {`navbar ${exibeNavbar ? "exibeNavbar" : ""}`}>
            <span onClick={() => { setExibeNavbar(false) }} className='navbar__close'>x</span>
            <Link to="/" className='eventlogo'>
                <img className='eventlogo__logo-image' src={window.innerWidth >= 992 ? logDesktop : logoMobile} alt="Event Plus logo" />
            </Link>

            <div className='navbar__items-box'>
                <Link className='navbar__item'to="/">Home</Link>
                <Link className='navbar__item'to="/tipo-eventos">Tipos de Eventos</Link>
                <Link className='navbar__item'to="/eventos">Eventos</Link>
                <Link className='navbar__item'to="/login">Login</Link>
                <Link className='navbar__item'to="/teste">Teste</Link>

            </div>

        </nav>
    );
};

export default Nav;