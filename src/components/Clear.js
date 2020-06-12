import React from 'react';
import '../App.css';

export const Clear = (props) => {
    return (
        <div className="clear-button" onClick={props.handleClear}>
            {props.children}
        </div>
    )
}
