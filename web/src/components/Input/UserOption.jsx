import React from 'react';
import './UserOption.css'


export default ({operation, change, click, value}) => 
    <div className={`${operation} option`}>

        <input name= {operation}
               type="number" 
               value={!value ? '' : value}
               onChange={change} 
               placeholder = {`Element to ${operation}`}
        />

        <button onClick={click}
                disabled={!value}>
            {operation} 
        </button>
        
    </div>
                                    