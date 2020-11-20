import React, {useState, useEffect} from 'react';
import UserOption from '../Input/UserOption';
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import HashBuckets from './HashComponent/HashBuckets/HashBuckets';
import BucketItem from './HashComponent/HashBuckets/BucketItem/BucketItem';
import HashComponent from './HashComponent/HashComponent';
import DLLNode from '../DoublyLinkedList/Node/DLLNode';
import './HashTablePage.css';
import MyHash from '../../classes/HashTable';



export default function HashTablePage(){

    const [insertField, setInsertField] = useState(0);
    const [searchField, setSearchField] = useState(0);
    const [HashValues, setHashValues] = useState(getRenderedStructureComponent(MyHash.values()));


    useEffect(() => {
        document.title = "Hash";
    }, [])


    function updateFoundElement(element){
        const assignedDesiredElementObject = MyHash.search(element);

        setHashValues(
            getRenderedStructureComponent(assignedDesiredElementObject)
        );
        
        
    }


    function getRenderedStructureComponent(){

        return (
            <CSSTransition>
                <HashComponent>
                    <HashBuckets>
            
                        {MyHash.values().map( (element) => {
                            
                            const [bucketIdx, bucketDLL] = element;
                            
                            return (
                                <BucketItem bucketIdx={bucketIdx}>

                                    <TransitionGroup>

                                        {bucketDLL.values().map((dllElement, nodeIdx, list) => 
                                            <CSSTransition>
                                                <DLLNode value={dllElement} 
                                                    idx={nodeIdx} 
                                                    
                                                    hasArrows={true}
                                                    type={nodeIdx === 0 ? "Head" : nodeIdx === list.length - 1 ? "Tail" : '' } />
                                            </CSSTransition>
                                        )}

                                    </TransitionGroup>

                                </BucketItem>
                            )

                        })}

                    </HashBuckets>
                </HashComponent>
            </CSSTransition>
        );        
    }

    function setUpdatedValues(operation){
        operation();

        setHashValues(getRenderedStructureComponent());
    }


    return(
        <div className="content">
            <div className="container structure-space hash">
                
                <div className="options">
                    <UserOption operation="insert" 
                                value={insertField} 
                                change={e => setInsertField(parseInt(e.target.value))} 
                                click={() => setUpdatedValues(() => MyHash.insert(insertField))}/>



                    <UserOption operation="search" 
                                value={searchField}
                                change={e => setSearchField(parseInt(e.target.value))} 
                                click={() => updateFoundElement(searchField)}/>

                    <button className="clearBtn" 
                            onClick={() => setUpdatedValues(() => MyHash.remove())}>
                                remove
                    </button>

                    <button className="clearBtn" 
                            onClick={() => setUpdatedValues(() => MyHash.clear())}>
                                clear
                    </button>

                </div>

                <div className="structure-content">
                    <TransitionGroup component={null}>
                        {HashValues}
                    </TransitionGroup>
                </div>
                

            </div>
            
        </div>
    )
}