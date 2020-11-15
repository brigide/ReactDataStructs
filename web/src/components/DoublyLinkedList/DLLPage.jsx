import React, {Component} from 'react';
import UserOption from '../Input/UserOption';
import DLLNode from './Node/DLLNode';
import './DLLPage.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyDLL from '../../classes/DoublyLinkedList';

const initialState = {
    insertFieldContent: null,
    removeFieldContent: null,
    searchFieldContent: null,
    values: []
}

export default class DLLPage extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.updateInsertField = this.updateInsertField.bind(this);
        this.updateSearchField = this.updateSearchField.bind(this);
        this.updateRemoveField = this.updateRemoveField.bind(this);
        this.updateFoundElement = this.updateFoundElement.bind(this);
        this.setUpdatedValues = this.setUpdatedValues.bind(this);
        MyDLL.insert = MyDLL.insert.bind(MyDLL);
        MyDLL.remove = MyDLL.remove.bind(MyDLL);
        MyDLL.clear = MyDLL.clear.bind(MyDLL);
    }

    componentDidMount(){
        document.title = "Doubly Linked List";
    }

    updateInsertField(insertFieldContent){
        this.setState({...this.state, insertFieldContent})
    }

    updateRemoveField(removeFieldContent){
        this.setState({...this.state, removeFieldContent})
    }

    updateSearchField(searchFieldContent){
        this.setState({...this.state, searchFieldContent})
    }

    updateFoundElement(element){

        let oldSelectedElements = Array.from(document.querySelectorAll(".node.found"));
        oldSelectedElements.forEach(el => el.classList.remove("found"));

        let idx = MyDLL.search(element);
        if(idx !== -1){
            let domElements = Array.from(document.querySelectorAll(`.el-${idx}`));
            domElements.forEach(el => el.classList.add("found"));
        }

    }

    setUpdatedValues(){
        let values = MyDLL.values().map( (element, idx, list) => 
                <CSSTransition key={idx} timeout={500} classNames="fade">
                    <DLLNode value={element} 
                            idx={idx} 
                             
                            hasArrows={idx !== 0}
                            type={idx === 0 ? "Head" : idx === list.length - 1 ? "Tail" : '' } />
                </CSSTransition>
        )

        this.setState({...this.state, values});
    }

    render(){
        return(
            <div className="container structure-space">
               
                <div className="options">
                    <UserOption operation="insert" 
                                value={this.state.insertFieldContent} 
                                change={this.updateInsertField} 
                                click={[MyDLL.insert, this.setUpdatedValues]}/>

                    <UserOption operation="remove" 
                                value={this.state.removeFieldContent} 
                                change={this.updateRemoveField} 
                                click={[MyDLL.remove, this.setUpdatedValues]}/>

                    <UserOption operation="search" 
                                value={this.state.searchFieldContent} 
                                change={this.updateSearchField} 
                                click={[this.updateFoundElement, ()=>{}]}/>

                    <button className="clearBtn" onClick={() => { MyDLL.clear();  this.setUpdatedValues()}}>clear</button>
                </div>

                <div className="structure-content">
                    <TransitionGroup component={null}>
                        {this.state.values}
                    </TransitionGroup>
                </div>
                

            </div>
        )
    }
}