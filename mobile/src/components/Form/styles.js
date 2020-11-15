import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; // para saber o tamanho da status bar do dispositivo executado

export default StyleSheet.create({
    form: {
        marginTop: 20
    },
    
    inputView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    
    input: {
        borderColor: '#56ccf6',
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,
        width: '85%'
    },
    
    btn: {
        backgroundColor: '#56ccf6',
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 5,
        marginBottom: 5,
    },
});

