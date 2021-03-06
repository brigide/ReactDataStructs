import React from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

import Form from '../../components/Form';

export default function Heap(){
    const navigation = useNavigation();

    function navigateBack(){
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={navigateBack}>
                <Feather name="arrow-left" size={28} color="#56ccf6" />
            </TouchableOpacity>    
            <Text style={styles.title}>Heap</Text>

            <Form />
        </View>
    );
}