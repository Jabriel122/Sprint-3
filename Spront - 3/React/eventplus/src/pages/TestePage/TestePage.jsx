import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import Titulo from '../../components/Titulo/Titulo';
const TestePage = () => {
    const [count, setCount] = useState(0);
    const [calculation, setCalulation] = useState(0);
    const {idEvento} = useParams();
    //executado quando o componente for montado
    //e quando o state count for alterado

    useEffect(() => {
        alert(`useEffect fazendo get do ${idEvento}`)


        // setCalulation(count * 2);
    }, [count]);

    return (
        <Container>
            <Titulo
                titleText={"Página Teste"}
            />

            <>
                <p>Count: {count}</p>
                <button onClick={() => setCount((c) => c + 1)}>  +  </button>
                <button onClick={() => setCount((c) => c - 1)}>  -  </button>
                <button onClick={() => setCount((c) => c * 5)}>  *  </button>
                <button onClick={() => setCount((c) => c / 2)}>  /  </button>
                <button onClick={() => setCount((c) => c / 0)}>  8  </button>
                <p>Calculation: {calculation}</p>
            </>
        </Container>
    );
};

export default TestePage;