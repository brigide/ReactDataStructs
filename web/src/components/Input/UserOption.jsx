import React from 'react';
import './UserOption.css'


export default ({operation, change, click, value, minValue}) => 
    <div className={`${operation} option`}>

        <input name= {operation}
               type="number"
               value={(isNaN(value) || value === undefined) ? '' : value}
               onChange={change} 
               min={minValue !== undefined ? minValue : null}
               placeholder = {`Element to ${operation}`}
        />

        <button onClick={click}
                disabled={(isNaN(value) || value === undefined)}>
            {operation} 
        </button>
        
    </div>
                                    