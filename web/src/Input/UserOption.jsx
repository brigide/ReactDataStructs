import React from 'react';
import './UserOption.css'


export default ({operation, change, click, value, isNatural}) => {

    const isInvalidValue = !Number.isInteger(value) || (isNatural && value < 0);

    return <div className={`${operation} option`}>

        <input name= {operation}
               type="number"
               value={isInvalidValue ? '' : value}
               onChange={change} 
               placeholder = {`Element to ${operation}`}
        />

        <button onClick={click}
                disabled={isInvalidValue}>
            {operation} 
        </button>
        
    </div>
}
                                    