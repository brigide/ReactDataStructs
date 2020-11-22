import React from 'react';
import './BucketItem.css';

export default ({children, bucketIdx}) => 
    <div className="bucket-item">

        <div className="bucket-idx">
            {bucketIdx}
        </div>

        <div className="DLLNodes">
            {children}
        </div>

    </div>
