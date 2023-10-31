import React from "react";
import './CardEventos.css'

const CardEvento = ({titulo, text, conection}) => {

    return (

        <div class="card-evento">
            <h3 class="card-evento__titulo">{titulo}</h3>
            <p class="card-evento__text"> {text}</p>
            <a href="" class="card-evento__conection">{conection}</a>
        </div>
    );
};

export default CardEvento;