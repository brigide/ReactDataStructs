import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Node from './components/Node';

import DoublyLinkedList from '../../classes/DoublyLinkedList';

export default function DLL(){
    const navigation = useNavigation();

    //DoublyLinkedList.clear();

    const [value, setValue] = useState();
    const [values, setValues] = useState([]);
    const [insert, setInsert] = useState('');
    const [remove, setRemove] = useState('');
    const [search, setSearch] = useState('');

    function navigateBack(){
        navigation.goBack();
    }

    function clear(){
        DoublyLinkedList.clear();
        setValues([]);
    }

    function updateInsert(){
        setValue(insert);
        setInsert(''); 
        console.log(insert);
        DoublyLinkedList.insert(parseInt(value));
        setUpdatedValues();
    }

    function updateRemove(){
        setValue(remove);
        setInsert('');
        DoublyLinkedList.remove(parseInt(value));
        setUpdatedValues();
    }
    function updateSearch(){
        setValue(search);
        setSearch('');
    }


    function setUpdatedValues(){
        let val = DoublyLinkedList.values().map((element, idx, list) => 
            <Node 
                hasSideArrows={idx % 2 === 0 && idx != list.length - 1 ? true : false} 
                hasDownArrows={false} 
                value={element} 
                key={idx} />
        )

        setValues(val);
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
                    <TouchableOpacity onPress={updateInsert} style={styles.btn}>
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
                    <TouchableOpacity onPress={updateRemove} style={styles.btn}>
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
                    <TouchableOpacity onPress={updateSearch} style={styles.btn}>
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