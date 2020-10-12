import React, {Component} from 'react';
import UserOption from './Input/UserOption';
import DLLNode from './Node/DLLNode';
import './DLLPage.css';
import MyDLL from '../classes/DoubleLinkedList';

const initialState = {
    insertContent: null,
    removeContent: null,
    searchContent: null,
    action: null
}

export default class DLLPage extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.updateInsertField = this.updateInsertField.bind(this);
        this.updateSearchField = this.updateSearchField.bind(this);
        this.updateRemoveField = this.updateRemoveField.bind(this);
        this.updateFoundElement = this.updateFoundElement.bind(this);
        MyDLL.insert = MyDLL.insert.bind(MyDLL);
        MyDLL.remove = MyDLL.remove.bind(MyDLL);
        MyDLL.clear = MyDLL.clear.bind(MyDLL);
    }

    updateInsertField(insertContent){
        this.setState({...this.state, insertContent})
    }

    updateRemoveField(removeContent){
        this.setState({...this.state, removeContent})
    }

    updateSearchField(searchContent){
        this.setState({...this.state, searchContent})
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

    render(){
        return(
            <div className="container structure-space">
                <div className="options">
                    <UserOption operation="insert" 
                                value={this.state.insertContent} 
                                change={this.updateInsertField} 
                                click={MyDLL.insert}/>
                    <UserOption operation="remove" 
                                value={this.state.removeContent} 
                                change={this.updateRemoveField} 
                                click={MyDLL.remove}/>
                    <UserOption operation="search" 
                                value={this.state.searchContent} 
                                change={this.updateSearchField} 
                                click={this.updateFoundElement}/>
                    <button className="clearBtn" onClick={MyDLL.clear}>clear</button>
                </div>



                <div className="DLLcontent">
                    {MyDLL.values().map( (element, idx, l) => 
                        <DLLNode value={element} idx={idx} key={idx} hasArrows={idx !== 0} />
                    )}
                </div>

            </div>
        )
    }
}