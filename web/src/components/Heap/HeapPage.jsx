import React, {Component} from 'react';
import UserOption from '../Input/UserOption';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Tree from 'react-d3-tree';
import MyHeap from '../../classes/Heap';

const initialState = {
    insertFieldContent: null,
    searchFieldContent: null,
    values: []
}

export default class HashTablePage extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.updateInsertField = this.updateInsertField.bind(this);
        this.updateSearchField = this.updateSearchField.bind(this);
        this.updateFoundElement = this.updateFoundElement.bind(this);
        this.setUpdatedValues = this.setUpdatedValues.bind(this);
        MyHeap.insert = MyHeap.insert.bind(MyHeap);
        MyHeap.remove = MyHeap.remove.bind(MyHeap);
        //MyHashTable.search = MyHashTable.search.bind(MyHashTable);

    }

    componentDidMount(){
        document.title = "Heap";
    }

    updateInsertField(insertFieldContent){
        this.setState({insertFieldContent})
    }


    updateSearchField(searchFieldContent){
        this.setState({searchFieldContent})
    }

    updateFoundElement(element){

    }

    setUpdatedValues(){
        let values = 
            <CSSTransition timeout={500} classNames="fade">
                <div id="treeWrapper" style={{ width: '100%', height: '100%' }}>
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
                        circleRadius={12}

                        translate={{
                            x: window.innerWidth / 2,
                            y: window.innerHeight / 2
                        }}

                        data={{...MyHeap.values()}}

                    />
                </div>
            </CSSTransition>

        this.setState({values});
        
    }

    render(){
        return(
            <div className="container structure-space">

                <div className="options">
                    <UserOption operation="insert" 
                                value={this.state.insertFieldContent} 
                                change={this.updateInsertField} 
                                click={[MyHeap.insert, this.setUpdatedValues]}
                    />


                    <UserOption operation="search" 
                                value={this.state.searchFieldContent} 
                                change={this.updateSearchField}
                                click={[MyHeap.search, this.setUpdatedValues]}
                    />

                    <button className="clearBtn" 
                            onClick={() => { MyHeap.remove();  MyHeap.values() !== undefined ? this.setUpdatedValues() : this.setState({values: []})}}>
                                remove
                    </button>

                    <button className="clearBtn" 
                            onClick={() => { MyHeap.clear();   this.setState({values: []})}}>
                                clear
                    </button>

                </div>



                <div className="structure-content" style={{width: "80%", height: "30em"}}>
                    <TransitionGroup component={null} >
                        {this.state.values}
                    </TransitionGroup>
                </div>

            </div>
        )
    }
}