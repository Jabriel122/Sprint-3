import React from 'react';
import './Titulo.css'
//As props você pode dar o nome que quiser, porém tome cuidado, não vá me colocar no seu portifólio
const Titulo = ({ titleText, color = "", potatoClass = "" }) => {
    return (
        <h1 className= {`title ${potatoClass}`} style = { { color : color} }>
            {titleText}
            <hr 
                className="title__underscore"
                style={ 
                    color !== "" ? {borderColor: color} : {}
                }
            />
        </h1>
    );
};

export default Titulo;