import React from 'react';
import './Input.css';

const input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = (
                <div>
                    <h3>{props.elementConfig.placeholder}</h3>
                    <input 
                    className="InputText" 
                    {...props.elementConfig} 
                    value={props.value}
                    onChange={props.changed}/>
                </div>
            );
            break;
        default:
            inputElement = <input className="InputText" 
            {...props.elementConfig} 
            value={props.value}/>;
    }


    return (
        <div className="Input">
            <label>{props.label}</label>
            {inputElement}
        </div>
    ); 
};

export default input;