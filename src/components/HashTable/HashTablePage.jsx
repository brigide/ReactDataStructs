import React, {Component} from 'react';
import UserOption from '../Input/UserOption';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyHashTable from '../../classes/HashTable';

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
    }

    componentDidMount(){
        document.title = "Hash Table";
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

    }

    setUpdatedValues(){

        //this.setState({...this.state, values});
    }

    render(){
        return(
            <div className="container structure-space">

                <div className="options">
                    <UserOption operation="insert" 
                                value={this.state.insertFieldContent} 
                                change={this.updateInsertField} 
                                />

                    <UserOption operation="remove" 
                                value={this.state.removeFieldContent} 
                                change={this.updateRemoveField} 
                                />

                    <UserOption operation="search" 
                                value={this.state.searchFieldContent} 
                                change={this.updateSearchField} 
                                />

                    <button className="clearBtn">clear</button>
                </div>



                <div className="structure-content">

                </div>

            </div>
        )
    }
}