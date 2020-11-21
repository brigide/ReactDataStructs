import React from 'react';
import { FaLongArrowAltRight, FaLongArrowAltLeft } from 'react-icons/fa';
import './DLLNode.css';

export default ({idx, value, type, hasArrows, isHashValue}) => 
    <div className={`DLLnode el-${idx} ${isHashValue ? 'HashValue' : ''}`}>
        <div className="value">
            <h3 className="node-value">{value}</h3>
            <h4 className="node-type">{type}</h4>
        </div>

        <div className="arrows" style={{display: hasArrows ? '' : 'none'}}>
            <div className="arrow next"><FaLongArrowAltRight size={25}/></div>
            <div className="arrow previous"><FaLongArrowAltLeft size={25}/></div>
        </div>
    </div>

