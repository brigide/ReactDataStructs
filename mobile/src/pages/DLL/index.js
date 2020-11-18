import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput, ScrollView} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Node from './components/Node';

export default function Home(){
    const navigation = useNavigation();

    const [value, setValue] = useState(0);
    const [insert, setInsert] = useState('');
    const [remove, setRemove] = useState('');
    const [search, setSearch] = useState('');

    function navigateBack(){
        navigation.goBack();
    }

    function updateInsert(){
        setValue(insert);
        setInsert('');
    }
    function updateRemove(){
        setValue(remove);
        setRemove('');
    }
    function updateSearch(){
        setValue(search);
        setSearch('');
    }


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#56ccf6" />
            </TouchableOpacity>    
            <Text style={styles.title}>Double Linked List</Text>

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
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
                <Node />
            </ScrollView>
        </View>
    );
}