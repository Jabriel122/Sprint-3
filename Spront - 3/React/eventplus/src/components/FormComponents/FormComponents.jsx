import React from 'react';
import './FormComponents.css'

export const Input = ({
    type,
    id,
    value,
    required,
    additionalClass = "",
    name,
    placeholder,
    manipulationFunction
}) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            value={value}
            required={required ? "requierd" : ""}
            className={`input-component${additionalClass}`}
            onChange={manipulationFunction}
            placeholder={placeholder}
            autoComplete="off"
        />
    );
};

export const Label = ({ htmlFor, labelText }) => {
    return <label htmlFor={htmlFor} >{labelText}</label>
}

//componente criado na forma tradicional props ao invás do destructuring 
export const Button = (props) => {
    return (
        <button
            id={props.id}
            name={props.name}
            type={props.type}
            className={`button-component ${props.additionalClass}`}
            onClick={props.manipulationFunction}
        >
            {props.textButton}
        </button>
    );
}

export const Select = ({
    required,
    id,
    name,
    options,
    manipulationFunction,
    additionalClass = "",
    defaultValue
}) => {
    return (
        <select
            name={name}
            id={id}
            required ={required}
            className = {`input-component ${additionalClass}`}
            onChange = {manipulationFunction}
            value = {defaultValue}
            >
            <option value="">Tipo Evento</option>
            {/* options.map(??) */}
            {options.map((o) => {
                return (
                    <option key={Math.random()} value={o.value}>{o.text}</option>
                );
            })}
        </select>
    )
}