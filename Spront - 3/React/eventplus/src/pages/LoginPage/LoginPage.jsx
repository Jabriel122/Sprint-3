import React from 'react';
import Titulo from '../../components/Titulo/Titulo';

const LoginPage = () => {
    return (
        <div>
            {/* <Header/> */}
            <Titulo 
            titleText="Login"
            // color='red'
            />
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