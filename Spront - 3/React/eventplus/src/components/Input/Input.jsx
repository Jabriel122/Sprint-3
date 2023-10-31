import React, { useState } from 'react';

const Input = ({ onChange, type, placeholder, name, id, value }) => {
    // const [numero1, setNumero1] = useState(); //dado do componente
    return (
    <>
        <input
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value = {value}
            onChange= {onChange}
        />
        <span>{value}</span>
    </>
    );
};

export default Input;