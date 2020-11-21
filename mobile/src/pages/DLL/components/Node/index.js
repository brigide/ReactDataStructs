import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';

import {Feather} from '@expo/vector-icons';

export default function Node({hasSideArrows, hasDownArrows, value, found, idx}){
    return (
        <View>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <View style={[styles.node,
                    {borderColor: found === value ? '#56ccf6' : 'black'}]}>
                    <View style={[styles.value,
                        {borderColor: found === value ? '#56ccf6' : 'black'}]}>
                        <Text style={styles.text}>{value}</Text>
                    </View>
                </View>

                <View style={{display: hasSideArrows ? 'flex' : 'none', marginLeft: 30}}>
                    <Feather name="arrow-left" size={28} color="#56ccf6" />
                    <Feather name="arrow-right" size={28} color="#56ccf6" />
                </View>
            </View>
            <View style={{display: hasDownArrows ? 'flex' : 'none',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'}}>
                <Feather name="arrow-down" size={28} color="#56ccf6" />
                <Feather name="arrow-up" size={28} color="#56ccf6" />
            </View>
        </View>

    );
}