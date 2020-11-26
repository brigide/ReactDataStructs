import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Node from '../HashTable/components/Node';

import HashTable from '../../classes/HashTable';
import BucketItem from '../HashTable/components/BucketItem';

export default function Hash(){
    const navigation = useNavigation();

    const [foundkey, setFoundkey] = useState();
    const [foundpos, setFoundpos] = useState();
    const [hash, setHash] = useState([]);
    const [insert, setInsert] = useState();
    const [remove, setRemove] = useState();
    const [search, setSearch] = useState();

    useEffect(() => getHash(), [foundkey]);

    function navigateBack(){
        navigation.goBack();
    }

    function clear(){
        HashTable.clear();
        setFoundkey(-1);
        setFoundpos(false);
        setHash([]);
        getHash();
    }

    function updateFoundElement(operation, setField, value){
        let ret = operation();

        setField('');

        if(ret !== false){
            let [key, pos, element] = ret;
            setFoundkey(key);
            setFoundpos(element);
        }
        getHash();
    }

    function getHash(){
        let hashItem = HashTable.values().map((element, idx) => {                     
            const [bucketIdx, bucketDLL] = element;
            return (
            <BucketItem idx={idx} hasArrows={bucketDLL.getSize() === 0 ? false : true} found={foundkey} key={idx}>
                <View style={styles.dll}>
                    {bucketDLL.values().map((element, idx, list) => 
                        <Node 
                            hasSideArrows={idx === list.length - 1 ? false : true} 
                            hasDownArrows={false} 
                            value={element}  
                            found={foundpos}
                            idx={idx}
                            key={idx}
                        />)}
                </View>
            </BucketItem>
        )})

        setHash(hashItem);
    }


    function setUpdatedValues(operation, setField){
        operation();
        setField('');

        getHash();
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