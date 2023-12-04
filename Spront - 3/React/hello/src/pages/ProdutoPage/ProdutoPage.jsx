import React, { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Container from '../../components/Container/Container'
const ProdutoPage = () => {
    const { theme, produto } = useContext(ThemeContext)
    return (

        <div>
            <h1>Página de Produto</h1>
            <p>{theme}</p>
            <ul style={{ lifeStyle: "None" }}>

                <li>
                    <strong> Nome: </strong>SUCO DE MARUCAJA | &nbsp;
                    <strong> Preço: </strong> 5,00 | &nbsp;
                    <strong> Promoção:: </strong> Sim | &nbsp;
                </li>


            </ul>
        </div>





    );
};

export default ProdutoPage;