import React from 'react';
import Header from '../../components/Header/Header';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <h1 className='LoginPage__Nome'>Nome:</h1>
            <br /><br />
            <input type="text"  placeholder='Digite o seu nome aqui'/>
            <br /><br />

            <h1>Email:</h1>
            <br /><br />
            <input type="text" placeholder='Digite o seu Email aqui'/>
        </div>
    );
};

export default LoginPage;