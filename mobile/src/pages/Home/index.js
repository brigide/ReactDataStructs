import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();

    function navigateToDLL(){
        navigation.navigate('DLL');
    }

    function navigateToHash(){
        navigation.navigate('HashTable');
    }

    function navigateToHeap(){
        navigation.navigate('Heap');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Data Structures</Text>
            <View style={styles.menu}>

                <TouchableOpacity
                    style={styles.item} 
                    onPress={navigateToDLL}>
                        <Text style={styles.btnText}>Double Linked List</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item} 
                    onPress={navigateToHash}>
                        <Text style={styles.btnText}>Hash</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item} 
                    onPress={navigateToHeap}>
                        <Text style={styles.btnText}>Heap</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}