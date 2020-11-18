import {StyleSheet} from 'react-native';
import Constants from 'expo-constants'; // para saber o tamanho da status bar do dispositivo executado

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor: '#e1e1e1',
    },

    title: {
        marginTop: 20,
        color: '#151515',
        fontSize: 20,
        fontWeight: 'bold',
    },

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

    data: {
        justifyContent: 'center',
        marginTop: 20,
        borderColor: 'red',
        borderWidth: 1,
        height: '60%'
    },
});