import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; // para saber o tamanho da status bar do dispositivo executado

export default StyleSheet.create({
    side: {
        flexDirection: 'row',
    },

    node: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 180,
        height: 90,
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
        width: 120,
        height: 90,
    },

    sideArrows: {
        marginLeft: 10,
    },

    downArrows: {
        flexDirection: 'row',
    },

});