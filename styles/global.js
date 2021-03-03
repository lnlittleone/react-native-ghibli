import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        padding: 20,
        flex: 1,
        color: '#ECE4D3',
        backgroundColor: '#D57676'
    },
    modalContainer:{
        backgroundColor: '#fff',
        padding:0,
    },
    titleText: {
        fontFamily: 'PatrickHand',
        fontSize: 25,
        padding: 10,
        color:'#42322a',
    },
    text: {
        fontFamily: 'PatrickHand',
        fontSize: 18,
        color:'#6E5042',
        padding:10
    },
    input:{
        fontFamily: 'PatrickHand',
        borderWidth:1,
        borderColor: '#ECE4D3',
        fontSize: 18,
        padding:10,
        borderRadius: 6,
        marginVertical: 5,
        width:250
    },
    error:{
        color: 'crimson',
        marginBottom: 10,
        marginTop:6,
        textAlign:'center'
    },
    imageDetails:{
        width:50,
        height:50
    }
});