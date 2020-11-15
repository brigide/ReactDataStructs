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
});