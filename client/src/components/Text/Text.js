import React from 'react';
import './Text.css';

const Text = ({type, text}) => {
    return (
        <>
        <div className={`text ${type}`}>
            {text}
        </div>
    </>
    )
}

export default Text;
