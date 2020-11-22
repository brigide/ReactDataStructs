import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Node from '../HashTable/components/Node';

import HashTable from '../../classes/HashTable';
import BucketItem from '../HashTable/components/BucketItem';

export default function DLL(){
    const navigation = useNavigation();

    const [found, setFound] = useState();
    const [hash, setHash] = useState([]);
    const [dlls, setDlls] = useState([]);
    const [insert, setInsert] = useState();
    const [remove, setRemove] = useState();
    const [search, setSearch] = useState();

    useEffect(() => getHash(), []);

    function navigateBack(){
        navigation.goBack();
    }

    function clear(){
        HashTable.clear();
        setFound(-1);
        setValues([]);
    }

    function updateFoundElement(operation, setField, value){
        let idx = operation();

        setField('');

        if(parseInt(idx) !== -1){
            setFound(value);
        }

        //setFound('');
    }

    function getHash(){
        let hashItem = HashTable.values().map((element, idx) => {                     
            const [bucketIdx, bucketDLL] = element;
            return (
            <BucketItem idx={bucketIdx} hasArrows={bucketDLL.getSize() === 0 ? false : true}>
                <View style={styles.dll}>
                    {bucketDLL.values().map((element, idx, list) => 
                        <Node 
                            hasSideArrows={idx === list.length - 1 ? false : true} 
                            hasDownArrows={false} 
                            value={element}  
                            found={found}
                            idx={idx}
                            key={idx}
                        />)}
                </View>
            </BucketItem>
        )})
        
        setHash(hashItem);
    }

    function getNodes(){
        let dll = HashTable.values().map((element, idx, list) => 
            <Node 
                hasSideArrows={false} 
                hasDownArrows={idx === list.length - 1 ? false : true} 
                value={element} 
                found={found}
                idx={idx}
                key={idx}
            />
        )

        setDlls(dll);
    }

    function setUpdatedValues(operation, setField){
        operation();
        setField('');

        getHash();
        console.log('aaaa');
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#56ccf6" />
            </TouchableOpacity>   

            <View style={styles.header}>
                <Text style={styles.title}>Hash Table</Text>
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
                    <TouchableOpacity onPress={() => setUpdatedValues(() => HashTable.insert(parseInt(insert)), setInsert)} style={styles.btn}>
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
                    <TouchableOpacity onPress={() => setUpdatedValues(() => HashTable.remove(parseInt(remove)), setRemove)} style={styles.btn}>
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
                    <TouchableOpacity onPress={() => updateFoundElement(() => HashTable.search(parseInt(search)), setSearch, parseInt(search))} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

            </View>

            <ScrollView style={styles.data} showsHorizontalScrollIndicator={false} horizontal={true} vertical={true}>
                <ScrollView style={styles.dataRow} showsVerticalScrollIndicator={false}>
                    {hash}
                </ScrollView>
            </ScrollView>
        </View>
    );
}