import React from 'react';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import './DLLNode.css';

export default props => 
    <div className={`node el-${props.idx}`}>
        <div className={`value`}>
            {props.value}
        </div>

        <div className="arrows" style={{display: props.hasArrows ? '' : 'none'}}>
            <div className="arrow next"><FiArrowRight size={25}/></div>
            <div className="arrow previous"><FiArrowLeft size={25}/></div>
        </div>
    </div>

