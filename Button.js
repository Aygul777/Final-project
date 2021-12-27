import React, {useState} from 'react';
import "./Button.css";


export default function Button({ title = "something", handleClick, formValid=false }) {
    return (
        <button disabled={formValid} onClick={handleClick} >{title}</button>
    );
}


