import React, {Component} from 'react';
import UserOption from '../Input/UserOption';
//import {CSSTransition, TransitionGroup} from 'react-transition-group';
import MyHashTable from '../../classes/HashTable';

const initialState = {
    insertFieldContent: null,
    removeFieldContent: null,
    searchFieldContent: null,
    values: []
}




export class HashTablePage extends Component{

    state = {...initialState};

    constructor(props){
        super(props);
        this.updateInsertField = this.updateInsertField.bind(this);
        this.updateSearchField = this.updateSearchField.bind(this);
        this.updateRemoveField = this.updateRemoveField.bind(this);
        this.updateFoundElement = this.updateFoundElement.bind(this);
        this.setUpdatedValues = this.setUpdatedValues.bind(this);
        MyHashTable.insert = MyHashTable.insert.bind(MyHashTable);
        MyHashTable.remove = MyHashTable.remove.bind(MyHashTable);
        MyHashTable.search = MyHashTable.search.bind(MyHashTable);
        MyHashTable.clear = MyHashTable.clear.bind(MyHashTable);
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
                                click={[MyHashTable.insert, () => {}]}
                                />

                    <UserOption operation="remove" 
                                value={this.state.removeFieldContent} 
                                change={this.updateRemoveField}
                                click={[MyHashTable.remove, () => {}]} 
                                />

                    <UserOption operation="search" 
                                value={this.state.searchFieldContent} 
                                change={this.updateSearchField}
                                click={[MyHashTable.search, () => {}]}
                                />

                    <button className="clearBtn" onClick={() => { MyHashTable.clear();  this.setUpdatedValues()}}>clear</button>
                </div>



                <div className="structure-content">

                </div>

            </div>
        )
    }
}