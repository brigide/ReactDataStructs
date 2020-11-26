import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Node from './components/Node';

import DoublyLinkedList from '../../classes/DoublyLinkedList';

export default function DLL(){
    const navigation = useNavigation();

    const [found, setFound] = useState();
    const [values, setValues] = useState([]);
    const [insert, setInsert] = useState();
    const [remove, setRemove] = useState();
    const [search, setSearch] = useState();

    useEffect(() => getNodes(), [found]);

    function navigateBack(){
        navigation.goBack();
    }

    function clear(){
        DoublyLinkedList.clear();
        setFound(-1);
        setValues([]);
    }

    function updateFoundElement(operation, setField, value){
        let idx = operation();

        setField('');

        if(parseInt(idx) !== false){
            setFound(value);
        }

        //setFound('');
    }

    function getNodes(){
        let val = DoublyLinkedList.values().map((element, idx, list) => 
            <Node 
                hasSideArrows={false} 
                hasDownArrows={idx === list.length - 1 ? false : true} 
                value={element} 
                found={found}
                idx={idx}
                key={idx}
            />
        )

        setValues(val);
    }

    function setUpdatedValues(operation, setField){
        operation();
        setField('');

        getNodes();
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#56ccf6" />
            </TouchableOpacity>   

            <View style={styles.header}>
                <Text style={styles.title}>Double Linked List</Text>
                <TouchableOpacity style={styles.clear} onPress={clear}>
                    <Feather name="trash" size={20} color="#56ccf6" />
                </TouchableOpacity>
            </View> 

            <View style={styles.form}>

                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.input} 
                        value={insert}
                        placeholder="Insert" 
                        placeholderTextColor="#525252"
                        onChangeText={(text) => setInsert(text)}></TextInput>
                    <TouchableOpacity onPress={() => setUpdatedValues(() => DoublyLinkedList.insert(parseInt(insert)), setInsert)} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.input} 
                        value={remove}
                        placeholder="Remove" 
                        placeholderTextColor="#525252"
                        onChangeText={(text) => setRemove(text)}></TextInput>
                    <TouchableOpacity onPress={() => setUpdatedValues(() => DoublyLinkedList.remove(parseInt(remove)), setRemove)} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.input} 
                        value={search}
                        placeholder="Search" 
                        placeholderTextColor="#525252"
                        onChangeText={(text) => setSearch(text)}></TextInput>
                    <TouchableOpacity onPress={() => updateFoundElement(() => DoublyLinkedList.search(parseInt(search)), setSearch, parseInt(search))} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

            </View>

            <ScrollView style={styles.data} showsVerticalScrollIndicator={false}>
                <View style={styles.dataRow}>
                    {values}
                </View>
            </ScrollView>
        </View>
    );
}