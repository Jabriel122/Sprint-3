import React from 'react';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <h1>Pagina Inicial</h1>
            

            <Link to={`/teste/${e.idEvento}`}> Vizualizar</Link>
        </div>
    );
};

export default Home;