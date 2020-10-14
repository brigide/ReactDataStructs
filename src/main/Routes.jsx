import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import DLLPage from '../components/DoublyLinkedList/DLLPage';
import HashTablePage from '../components/HashTable/HashTablePage';

export default props =>
    <Switch>
        <Route exact path='/' component={DLLPage} />
        <Route path='/dll' component={DLLPage} />
        <Route path='/hash' component={HashTablePage} />
        <Redirect from='*' to='/' />
    </Switch>
