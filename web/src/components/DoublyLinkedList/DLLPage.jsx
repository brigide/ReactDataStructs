import React, {useState, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Modal from '../Modal/Modal';

//COMPONENTS
import UserOption from '../Input/UserOption';
import DLLNode from './Node/DLLNode';
import DLLReport from './DLLReport/DLLReport';

//Structure singleton instance
import MyDLL from '../../classes/DoublyLinkedList';

let mountTimes = 0; 

const WelcomeModal = ({onClose}) => 
    <Modal modalTitle="React Data Structure Project" onClose={onClose}>
        
        <h2>Welcome!</h2>
        Here you'll learn more about how Doubly Linked List, Hash Table and Heap structures work
        through simulations!

        <h3>If you want to know our job, access:</h3>
        <div className="authors">
            <ul>
                <li><a href="https://github.com/GabrielBueno200" target="_blank">Gabriel Bueno</a></li>
                <li><a href="https://github.com/brigide" target="_blank">Bruno Brigide</a></li>
            </ul>
        </div>
    </Modal>



export default function DLLPage(){
    const [insertField, setInsertField] = useState(0);
    const [searchField, setSearchField] = useState(0);
    const [removeField, setRemoveField] = useState(0);
    const [DLLValues, setDLLValues] = useState(getStructureComponentRendered());
    
    const [showWelcome, setWelcome] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        document.title = "Doubly Linked List";

        if(mountTimes < 1){
            setWelcome(true);
            mountTimes++;
        }
    }, []);


    function resetFoundNodeStyle(){
        let oldSelectedElements = Array.from(document.querySelectorAll(".DLLnode.found"));
        oldSelectedElements.forEach(el => el.classList.remove("found"));
    }

    function updateFoundElement(element){

        let hasFound = MyDLL.search(element);

        if(hasFound){
            let domElements = Array.from(document.querySelectorAll('.DLLnode .node-value'));
            domElements.forEach(el => el.textContent === String(element) ? 
                                        el.parentElement.parentElement.classList.add("found") 
                                        : null);
        }

    }


    function getStructureComponentRendered(){

        resetFoundNodeStyle();

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

                <button style={{marginTop: "10px"}} 
                        onClick={() => setUpdatedValues(() => MyDLL.clear())}>clear</button>
            

            <button className="btn-primary" onClick={() => setShowModal(true)}>See more</button>

            {showModal ? <DLLReport onClose={() => setShowModal(false)}/> : null}

            {showWelcome ? <WelcomeModal onClose={() => setWelcome(false)}/> : null}

            </div>

            <div className="structure-content DLL">
                <TransitionGroup component={null}>
                    {DLLValues}
                </TransitionGroup>
            </div>

        </div>
    )
}


