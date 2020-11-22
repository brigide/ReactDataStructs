import React from 'react';
import {NavLink} from 'react-router-dom';
import './Menu.css';

export default () => 
    <nav className="navbar">
        <div className="navbar-content">
            <div className="nav-items">
                <NavLink className="nav-item" to="dll" activeClassName="active-item">Doubly Linked List</NavLink>
                <NavLink className="nav-item" to="hash" activeClassName="active-item">Hash Table</NavLink>
                <NavLink className="nav-item" to="heap" activeClassName="active-item">Heap</NavLink>
            </div>
        </div>
    </nav>