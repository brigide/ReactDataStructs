import React, {useState} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';

import {Feather} from '@expo/vector-icons';

export default function Node({hasSideArrows, hasDownArrows}){
    return (
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.node}>
                    <View style={styles.value}>
                        <Text style={styles.text}>10</Text>
                    </View>
                </View>

                <View style={{display: hasSideArrows ? 'flex' : 'none', marginLeft: 30}}>
                    <Feather name="arrow-left" size={28} color="#56ccf6" />
                    <Feather name="arrow-right" size={28} color="#56ccf6" />
                </View>
            </View>
            <View style={{display: hasDownArrows ? 'flex' : 'none',
                          flexDirection: 'row',
                          marginLeft: 30,
                          marginTop: -30,}}>
                <Feather name="arrow-down" size={28} color="#56ccf6" />
                <Feather name="arrow-up" size={28} color="#56ccf6" />
            </View>
        </View>

    );
}