import React from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import './DLLNode.css';

export default props => 
    <div className={`DLLnode el-${props.idx}`}>
        <div className="value">
            <h3>{props.value}</h3>
            <h4>{props.type}</h4>
        </div>

        <div className="arrows" style={{display: props.hasArrows ? '' : 'none'}}>
            <div className="arrow next"><FaLongArrowAltRight size={25}/></div>
            <div className="arrow previous"><FaLongArrowAltLeft size={25}/></div>
        </div>
    </div>

