import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';

import {Feather} from '@expo/vector-icons';

export default function Home(){
    return (
        <View style={styles.node}>
            <View style={styles.value}>
                <Text style={styles.text}>10</Text>
            </View>
        </View>
    );
}