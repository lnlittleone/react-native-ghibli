import React from 'react';
import {StyleSheet, Text, View, Image, ImageBackground} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons";

export default function Header ({navigation, title}){

    const openMenu = () => {
        navigation.toggleDrawer()
    }
    return (
        <ImageBackground style={styles.header} source={require('../../assets/game_bg.png')}>
            <MaterialIcons name="menu" onPress={openMenu} size={28} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
                <Image source={require('../../assets/images/cat.png')} style={styles.headerImage}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 85,
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#ECE4D3',
     },
    headerText: {
        fontFamily: 'PatrickHand',
        fontSize: 25,
        color: '#6E5042',
        letterSpacing: 1,
    },
    icon:{
      position: 'absolute',
      left:20,
        bottom:5,
    },
    headerTitle:{
        flexDirection: 'row',
    },
    headerImage:{
        width:55,
        height: 50,
    },

});