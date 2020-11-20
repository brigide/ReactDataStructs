import React, {useState, useEffect} from 'react';
import UserOption from '../Input/UserOption';
import DLLNode from './Node/DLLNode';
import './DLLPage.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyDLL from '../../classes/DoublyLinkedList';

/*function detectWrap(){
  
    var wrappedItems = [];
    var prevItem = {};
    var currItem = {};
    var items = document.getElementsByClassName('DLLnode');
  
    for (var i = 0; i < items.length; i++) {
      currItem = items[i].getBoundingClientRect();
      if (prevItem && prevItem.top < currItem.top) {
        wrappedItems.push(items[i]);
      }
      prevItem = currItem;
    };

    if (wrappedItems.length % 2 == 1)
        reverseOddRow(wrappedItems[wrappedItems.length - 1]);
}

function reverseOddRow(FlexChild){

    let firstFlexChild = parseInt(FlexChild.classList[1].split("-")[1]);
    const oldLastFlexChild = document.querySelector(".structure-content.DLL").lastChild;

    let i = 0;
    while(true){
        let currFlexChild = document.querySelector(`.el-${firstFlexChild+i}`);
        let currLastChild = document.querySelector(".structure-content.DLL").lastChild;
        console.log(i)
        if(currFlexChild === oldLastFlexChild) break;

        document.querySelector(".structure-content.DLL").insertBefore(currFlexChild, currLastChild.nextSibling )
        
        i++;
    }

    
}*/

export default function DLLPage(){
    const [insertField, setInsertField] = useState(0);
    const [searchField, setSearchField] = useState(0);
    const [removeField, setRemoveField] = useState(0);
    const [DLLValues, setDLLValues] = useState(getStructureComponentRendered());

    useEffect(() => {
        document.title = "Doubly Linked List";
    }, [])


    function resetFoundNodeStyle(){
        let oldSelectedElements = Array.from(document.querySelectorAll(".DLLnode.found"));
        oldSelectedElements.forEach(el => el.classList.remove("found"));
    }

    function updateFoundElement(element){

        let hasFound = MyDLL.search(element);

        if(hasFound){
            let domElements = Array.from(document.querySelectorAll('.DLLnode h3'));
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

                <button className="clearBtn" onClick={() => setUpdatedValues(() => MyDLL.clear())}>clear</button>
            </div>

            <div className="structure-content DLL">
                <TransitionGroup component={null}>
                    {DLLValues}
                </TransitionGroup>
            </div>

        </div>
    )
}


