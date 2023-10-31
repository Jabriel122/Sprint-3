import React from "react";
import './Title.css'

const Title = (props) => {

    return(
        <h1 className="title">Hello Componente Title{props.nome} {props.sobrenome}</h1>
    );
}

export default Title;