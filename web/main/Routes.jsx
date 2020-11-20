import React from 'react';
import { Switch, Redirect, Route } from 'react-router';

import DLLPage from '../components/DoublyLinkedList/DLLPage';
import HeapPage from '../components/Heap/HeapPage';
import HashTablePage from '../components/HashTable/HashTablePage';

export default () =>
    <Switch>
        <Route exact path='/' component={DLLPage} />
        <Route path='/dll' component={DLLPage} />
        <Route path='/hash' component={HashTablePage} />
        <Route path='/heap' component={HeapPage} />
        <Redirect from='*' to='/' />
    </Switch>
