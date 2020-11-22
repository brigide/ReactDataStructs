import React, {useState, useEffect} from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

//Components
import UserOption from '../Input/UserOption';
import Tree from 'react-d3-tree';
import HeapReport from './HeapReport/HeapReport';

//Structure singleton instance
import MyHeap from '../../classes/Heap';



export default function HeapPage(){

    const [insertField, setInsertField] = useState(0);
    const [searchField, setSearchField] = useState(0);
    const [HeapValues, setHeapValues] = useState(getRenderedStructureComponent(MyHeap.values()));

    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        document.title = "Heap";
    }, [])


    function updateFoundElement(element){
        
        const assignedDesiredElementObject = MyHeap.search(element);

        setHeapValues(
            getRenderedStructureComponent(assignedDesiredElementObject)
        );
        
        
    }


    function getRenderedStructureComponent(values){

        const structureContentArea = document.querySelector('.structure-content');

        return (
            MyHeap.values() !== undefined ? 
                <CSSTransition timeout={500} classNames="fade"> 

                    <div id="treeWrapper">
            
                        <Tree 
                            styles={{
                                nodes: {
                                    node: {
                                        circle: {
                                            fill: '#012943',
                                        }
                                    },
                                    leafNode: {
                                        circle: {
                                            fill: '#28BB14',
                                        }
                                    }
                                }
                            }}
                            
                            orientation="vertical" 
                            collapsible={false} 
                            

                            nodeSvgShape={{
                                shape: 'circle',
                                shapeProps:{r:12}
                            }}

                            translate={{
                                x: structureContentArea ? structureContentArea.clientWidth / 2 : null,
                                y: structureContentArea ? structureContentArea.clientHeight / 4 : null
                            }}

                            data={{...values}}

                        /> 

                    </div>

                </CSSTransition> : []
        )

        
    }

    function setUpdatedValues(operation){
        operation();

        setHeapValues(getRenderedStructureComponent(MyHeap.values())) 
    }


    return(
        <div className="container structure-space">
            
            <div className="options">
                <UserOption operation="insert" 
                            value={insertField} 
                            change={e => setInsertField(parseInt(e.target.value))} 
                            click={() => setUpdatedValues(() => MyHeap.insert(insertField))}/>



                <UserOption operation="search" 
                            value={searchField} 
                            change={e => setSearchField(parseInt(e.target.value))} 
                            click={() => updateFoundElement(searchField)}/>

                <button style={{marginTop: "10px"}}
                        onClick={() => setUpdatedValues(() => MyHeap.remove())}>
                            remove
                </button>

                <button style={{marginTop: "10px"}} 
                        onClick={() => setUpdatedValues(() => MyHeap.clear())}>
                            clear
                </button>

                <button className="btn-primary" onClick={() => setShowModal(true)}>See more</button>

                {showModal ? <HeapReport onClose={() => setShowModal(false)}/> : null}

            </div>

            <div className="structure-content">
                <TransitionGroup component={null}>
                    {HeapValues}
                </TransitionGroup>
            </div>
            

        </div>
    )
}







