import React, {Fragment} from 'react';

//CSS
import './StructureModal.css';


export default function StructureModal({structureName, onClose, children}){


    return (
        <Fragment>

            <div className="modal">

                <h5 className="modal-title">{structureName}</h5>

                <div className="modal-content" onSubmit={() =>{}}>

                    <div className="structure-informations">
                        {children}
                    </div>

                    <div className="modal-buttons">
                        <button className="btn-primary" onClick={onClose}>Close</button>
                    </div>
                </div>

            </div>
            
            <div className="modal-bg" onClick={onClose}></div>
        </Fragment>
    );
}