import React from 'react';
import Routes from './Routes';
import Menu from '../components/Menu/Menu';
import { BrowserRouter } from 'react-router-dom';
import './App.css';


export default props =>
    <BrowserRouter> 
      <Menu />
      <Routes/>
    </BrowserRouter>
   