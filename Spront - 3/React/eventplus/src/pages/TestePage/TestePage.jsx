import React, { useState } from 'react';
import Button from '../../components/Button/Button';
import Titulo from '../../components/Titulo/Titulo';
import Input from '../../components/Input/Input';

const TestePage = () => {
    //variáveis do componentes
    const [n1, setN1] = useState();
    const [n2, setN2] = useState();
    const [total, setTotal] = useState();

    function handleCalcular(e){
        e.preventDefault();
        setTotal( parseFloat(n1) + parseFloat(n2));

    }

    return (
        <div>
            {/* <Header /> */}
            <Titulo 
            titleText="Pagina dos Poc's"
            // color='red'
            />
            <br /><br />
             <Titulo 
            titleText="Calculator"
            // color='red'
            />

            <form onSubmit={handleCalcular}>
                <Input
                    type="number"
                    placeholder="Primeiro Número"
                    name="n1"
                    id="n1"
                    value={n1}
                    onChange={(e) => {setN1(e.target.value)}}
                />
                <br />
                <Input
                    type="number"
                    placeholder="Segundo Número"
                    name="n2"
                    id="n2"
                    value={n2}
                    onChange={(e) => {setN2(e.target.value)}}
                />
                <br />
                <Button
                    textButton="Calcular"
                    type="submit"
                />
                <span>Resultado: <strong id='res'>{total}</strong></span>
            </form>
            
            {/* <p>Valor do N1:{n1}</p>
            <p>Valor do N2:{n2}</p>
            <p>Resultado Subtração{n1 - n2}</p>
            <p>Resultado Adição{(n1) + (n2)}</p>
            <p>Resultado de Multiplicação {n1 * n2}</p>
            <p>Resultado de Divisão {n1 / n2}</p> */}
        </div>
    );
};

export default TestePage;