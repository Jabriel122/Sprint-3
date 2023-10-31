import React from 'react';
import './HomePage.css'
import Header from '../../components/Header/Header';

const HomePage = () => {
    return (
        <div>
            <Header />
            <h1 className='HomePage__Titulo'>Home Bem Vindo</h1>
        </div>
    );
};

export default HomePage;