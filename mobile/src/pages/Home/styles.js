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
        color: '#151515',
        fontSize: 20,
        fontWeight: 'bold',
    },

    menu: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '90%'
    },

    item: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#56ccf2',
        width: 200,
        paddingVertical: 15,
    },
});