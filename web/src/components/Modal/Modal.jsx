import React, {Fragment} from 'react';
import {Animated} from "react-animated-css";

//CSS
import './Modal.css';



export default function Modal({modalTitle, onClose, children}){


    return (
        <Fragment>

            
                <div className="modal">
                    <Animated animationIn="bounce" isVisible={true}>
                        <h5 className="modal-title">{modalTitle}</h5>

                        <div className="modal-content" onSubmit={() =>{}}>

                            <div className="structure-informations">
                                {children}
                            </div>

                            <div className="modal-buttons">
                                <button className="btn-primary" onClick={onClose}>Close</button>
                            </div>
                        </div>
                    </Animated>
                </div>
           

            <div className="modal-bg" onClick={onClose}></div>

        </Fragment>
    );
}