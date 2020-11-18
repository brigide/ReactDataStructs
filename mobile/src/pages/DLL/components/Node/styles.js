import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; // para saber o tamanho da status bar do dispositivo executado

export default StyleSheet.create({
    node: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 7,
        width: 110,
        height: 60,
        borderWidth: 1,
        borderColor: 'black',
        marginTop: 0,
        marginBottom: 30
    },
    
    value: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'black',
        width: 80,
        height: 60,
    }
});