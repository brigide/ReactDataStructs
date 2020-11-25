import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

import {Feather} from '@expo/vector-icons';

export default function QueueNode({children, first, last}){
    return(
        <View style={styles.item}>
            <View style={styles.arrow}>
                <Text style={{color: first ? "black" : "#e1e1e1"}}>Begin</Text>
                <Feather name="arrow-right" size={20} color={first ? "#56ccf6" : "#e1e1e1"} />
            </View>
            <View style={styles.queue}>
                <Text>{children}</Text>
            </View>
            <View style={styles.arrow}>
                <Feather name="arrow-left" size={20} color={last ? "#56ccf6" : "#e1e1e1"} />
                <Text style={{color: last ? "black" : "#e1e1e1"}}>End</Text>
            </View>
        </View>
    )
}