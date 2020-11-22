import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; // para saber o tamanho da status bar do dispositivo executado

export default StyleSheet.create({

    node: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 90,
        height: 50,
        borderWidth: 1,
        marginTop: 0,
        marginBottom: 0
    },

    found: {
        borderColor: '#FFFF00'
    },
    
    value: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        width: 60,
        height: 50,
    },

    sideArrows: {
        marginLeft: 10,
    },

    downArrows: {
        flexDirection: 'row',
    },

});