import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text, TextInput} from 'react-native';
import styles from './styles';

import {Feather} from '@expo/vector-icons';

export default function BucketItem({children, found, idx, hasArrows}){
    return (
        <View style={styles.bucketItem}>
            <View style={styles.bucket}>
                <Text>{idx}</Text>
            </View>
            <View style={{display: hasArrows ? 'flex' : 'none', marginTop: 5, marginLeft: -5}}>
                    <Feather name="arrow-left" size={28} color="#56ccf6" />
                    <Feather name="arrow-right" size={28} color="#56ccf6" />
                </View>
            <View styles={styles.dll}>
                {children}
            </View>
        </View>

    );
}