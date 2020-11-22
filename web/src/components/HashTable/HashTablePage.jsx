//LIBS
import React, {useState, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group'

//COMPONENTS
import UserOption from '../Input/UserOption';

import HashComponent from './HashComponent/HashComponent';
import HashBuckets from './HashComponent/HashBuckets/HashBuckets';
import BucketItem from './HashComponent/HashBuckets/BucketItem/BucketItem';

import HashReport from './HashReport/HashReport';

import DLLNode from '../DoublyLinkedList/Node/DLLNode';

//CSS
import './HashTablePage.css';

//Structure singleton instance
import MyHash from '../../classes/HashTable';


export default function HashTablePage(){

    const [insertField, setInsertField] = useState(undefined);
    const [searchField, setSearchField] = useState(undefined);
    const [removeField, setRemoveField] = useState(undefined);
    const [HashValues, setHashValues] = useState(getRenderedStructureComponent(MyHash.values()));

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        document.title = "Hash";
    }, [])


    function resetFoundNodeStyle(){
        let oldSelectedElements = Array.from(document.querySelectorAll(".DLLnode.HashValue.found"));
        oldSelectedElements.forEach(el => el.classList.remove("found"));
    }


    function updateFoundElement(element){

        let hasFound = MyHash.search(element);

        if(hasFound !== -1){
            let domElements = Array.from(document.querySelectorAll('.DLLnode.HashValue .node-value'));
            domElements.forEach(el => el.textContent === String(element) ? 
                                        el.parentElement.parentElement.classList.add("found") 
                                        : null);
        }
        
    }


    function getRenderedStructureComponent(){

        resetFoundNodeStyle();

        return (
            <HashComponent>
                <HashBuckets>

                    <TransitionGroup component={null}>
                        
                            {MyHash.values().map( (element, idx) => {
                                
                                const [bucketIdx, bucketDLL] = element;
                                
                                return (
                                    <CSSTransition timeout={500} classNames="fade" key={idx}>
                                        <BucketItem bucketIdx={bucketIdx}>
                                            
                                            <TransitionGroup component={null}>

                                                {bucketDLL.values().map((dllElement, nodeIdx, list) => 
                                                    <CSSTransition timeout={500} classNames="fade" key={nodeIdx} >
                                                        <DLLNode value={dllElement} 
                                                            idx={nodeIdx} 
                                                            isHashValue={true}
                                                            hasArrows={true}
                                                            type={nodeIdx === 0 ? "Head" : nodeIdx === list.length - 1 ? "Tail" : '' } />
                                                    </CSSTransition>
                                                )}

                                            </TransitionGroup>

                                        </BucketItem>
                                    </CSSTransition>
                                )

                            })}
                        
                    </TransitionGroup>

                </HashBuckets>
            </HashComponent>
        );        
    }

    function setUpdatedValues(operation){
        operation();

        setHashValues(getRenderedStructureComponent());
    }


    return(
        <div className="container structure-space hash">
            
            <div className="options">
                <UserOption operation="insert" 
                            minValue={0}
                            value={insertField} 
                            change={e => setInsertField(parseInt(e.target.value))} 
                            click={() => setUpdatedValues(() => MyHash.insert(insertField))}/>


                <UserOption operation="remove" 
                            minValue={0}
                            value={removeField}
                            change={e => setRemoveField(parseInt(e.target.value))} 
                            click={() => setUpdatedValues(() => MyHash.remove(removeField))}/>
                
                <UserOption operation="search" 
                            minValue={0}
                            value={searchField} 
                            change={e => setSearchField(parseInt(e.target.value))} 
                            click={() => updateFoundElement(searchField)}/>

                <button style={{marginTop: "10px"}}
                        onClick={() => setUpdatedValues(() => MyHash.clear())}>
                            clear
                </button>

                <button className="btn-primary" onClick={() => setShowModal(true)}>See more</button>

                {showModal ? <HashReport onClose={() => setShowModal(false)}/> : null}

            </div>

            <div className="structure-content">
                {HashValues}
            </div>
            
        </div>
    )
}