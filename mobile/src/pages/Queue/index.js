import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import QueueNode from './components/QueueNode';

import StaticQueue from '../../classes/StaticQueue';

export default function Queue(){
    const navigation = useNavigation();

    const [found, setFound] = useState();
    const [first, setFirst] = useState();
    const [last, setLast] = useState();
    const [remove, setRemove] = useState();
    const [queue, setQueue] = useState([]);
    const [insert, setInsert] = useState();
    const [search, setSearch] = useState();

    useEffect(() => getQueue(), [found, first, last]);

    function navigateBack(){
        navigation.goBack();
    }

    function clear(){
        StaticQueue.clear();
        setFound(-1);
        setQueue([]);
        setFirst(-1);
        setLast(-1);
        getQueue();
    }

    function updateFoundElement(operation, setField, value){
        let isInQueue = operation();

        setField('');

        setFirst(StaticQueue.getBegin());
        setLast(StaticQueue.getEnd());

        if(isInQueue !== false){
            setFound(value);
        }
        getQueue();
    }

    function getQueue(){
        let queueItem = StaticQueue.values().map((element, idx) => {                     
            return (
            <QueueNode
                key={idx}
                first={first === idx ? true : false}
                last={last === idx ? true : false}
                found={found}>
                {element === null ? null : element} 
            </QueueNode>
        )})

        setQueue(queueItem);
    }


    function setUpdatedValues(operation, setField){
        operation();
        setField('');

        setFirst(StaticQueue.getBegin());
        setLast(StaticQueue.getEnd());

        getQueue();
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#56ccf6" />
            </TouchableOpacity>   

            <View style={styles.header}>
                <Text style={styles.title}>Static Queue</Text>
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
                    <TouchableOpacity onPress={() => setUpdatedValues(() => StaticQueue.enqueue(parseInt(insert)), setInsert)} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

                <View style={styles.dequeueBtn}>
                    <TouchableOpacity onPress={() => setUpdatedValues(() => StaticQueue.dequeue(), setRemove)} style={styles.btn}>
                        <Text style={styles.dequeueTxt}>Dequeue</Text>
                    </TouchableOpacity>  
                </View>

                <View style={styles.inputView}>
                    <TextInput 
                        style={styles.input} 
                        value={search}
                        placeholder="Search" 
                        placeholderTextColor="#525252"
                        onChangeText={(text) => setSearch(text)}></TextInput>
                    <TouchableOpacity onPress={() => updateFoundElement(() => StaticQueue.search(parseInt(search)), setSearch, parseInt(search))} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

            </View>

            <ScrollView style={styles.data} showsVerticalScrollIndicator={false}>
                <View style={styles.dataRow}>
                    {queue}
                </View>
            </ScrollView>
        </View>
    );
}