import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; //serve como browserrouter do react app
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator(); //cria app de navegacao

//importando as pages
import Home from './pages/Home';
import DLL from './pages/DLL';
import HashTable from './pages/HashTable';
import Queue from './pages/Queue';

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={{headerShown: false}}>
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="DLL" component={DLL}/>
                <AppStack.Screen name="HashTable" component={HashTable}/>
                <AppStack.Screen name="Queue" component={Queue}/>
            </AppStack.Navigator>

        </NavigationContainer>
    );
}