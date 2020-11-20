import React, {useState, useEffect} from 'react';
import UserOption from '../Input/UserOption';
import DLLNode from './Node/DLLNode';
import './DLLPage.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyDLL from '../../classes/DoublyLinkedList';


export default function DLLPage(){
    const [insertField, setInsertField] = useState(0);
    const [searchField, setSearchField] = useState(0);
    const [removeField, setRemoveField] = useState(0);
    const [DLLValues, setDLLValues] = useState(getStructureComponentRendered());

    useEffect(() => {
        document.title = "Doubly Linked List";
    }, [])


    function resetNodeFoundStyle(){
        let oldSelectedElements = Array.from(document.querySelectorAll(".DLLnode.found"));
        oldSelectedElements.forEach(el => el.classList.remove("found"));
    }

    function updateFoundElement(element){

        let idx = MyDLL.search(element);

        if(idx !== -1){
            let domElements = Array.from(document.querySelectorAll('.DLLnode h3'));
            domElements.forEach(el => el.textContent === String(element) ? el.parentElement.parentElement.classList.add("found") : null);
        }

    }


    function getStructureComponentRendered(){

        resetNodeFoundStyle();

        return (
            MyDLL.values().map( (element, idx, list) => 
                <CSSTransition key={idx} timeout={500} classNames="fade">
                    <DLLNode value={element} 
                            idx={idx} 
                            
                            hasArrows={idx !== 0}
                            type={idx === 0 ? "Head" : idx === list.length - 1 ? "Tail" : '' } />
                </CSSTransition>
            )
        )

    }

    function setUpdatedValues(operation){
        operation();


        setDLLValues(getStructureComponentRendered());


    }


    return(
        <div className="container structure-space">
            
            <div className="options">
                <UserOption operation="insert" 
                            value={insertField} 
                            change={e => setInsertField(parseInt(e.target.value))} 
                            click={() => setUpdatedValues(() => MyDLL.insert(insertField))}/>

                <UserOption operation="remove" 
                            value={removeField} 
                            change={e => setRemoveField(parseInt(e.target.value))} 
                            click={() => setUpdatedValues(() => MyDLL.remove(removeField))}/>

                <UserOption operation="search" 
                            value={searchField} 
                            change={e => setSearchField(parseInt(e.target.value))} 
                            click={() => updateFoundElement(searchField)}/>

                <button className="clearBtn" onClick={() => setUpdatedValues(() => MyDLL.clear())}>clear</button>
            </div>

            <div className="structure-content">
                <TransitionGroup component={null}>
                    {DLLValues}
                </TransitionGroup>
            </div>
            

        </div>
    )
}


