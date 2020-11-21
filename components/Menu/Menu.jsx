import React from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default () => 
    <nav className="navbar">
        <div className="navbar-content">
            <ul className="nav-items">
                <li className="nav-item"><Link to="dll">Doubly Linked List</Link></li>
                <li className="nav-item"><Link to="hash">Hash Table</Link></li>
                <li className="nav-item"><Link to="heap">Heap</Link></li>        
            </ul>
        </div>
    </nav>