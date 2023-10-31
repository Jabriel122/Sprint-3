import React, { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0); //dado do componente

    function handleIncrementar(){
       setContador(contador + 1);
    }

    function handleDescrimentar (){
        setContador( contador === 0 ? 0 : contador - 1)

        // if(contador === 0){
        //     setContador(0)
        //     return
        // }else{

        //     setContador(contador - 1);
        // }
    }    
        
    return (
        <div>
                <h1>Contador</h1>

                <span>{ contador }</span>

                <button onClick={() => {handleIncrementar()}}>Incrimentar</button>

                <button onClick={() => {handleDescrimentar()}}>Discrimentar</button>
        </div>
    );
};

export default Contador;
