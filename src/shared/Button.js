import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function FlatButton({text, onPress}){

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'#799E35',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
    buttonText:{
        color:'#fff',
        textTransform: 'uppercase',
        fontSize:16,
        textAlign: 'center'
    }
})