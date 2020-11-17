import React from 'react';
import {View, TouchableOpacity, TextInput} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

export default function Form({setValue}) {
    const navigation = useNavigation();



  return (
            <View style={styles.form}>

                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Insert" placeholderTextColor="#525252"></TextInput>
                    <TouchableOpacity onPress={setValue} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Remove" placeholderTextColor="#525252"></TextInput>
                    <TouchableOpacity onPress={setValue} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

                <View style={styles.inputView}>
                    <TextInput style={styles.input} placeholder="Search" placeholderTextColor="#525252"></TextInput>
                    <TouchableOpacity onPress={setValue} style={styles.btn}>
                        <Feather name="arrow-right" size={28} color="#e1e1e1" />
                    </TouchableOpacity>  
                </View>

            </View>
  );
}