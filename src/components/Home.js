import React, { useState, useEffect } from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList, Image} from 'react-native';
import {globalStyles} from "../../styles/global";
import Card from '../shared/Card'
import ModalComponent from './ModalComponent'

export const Home = ({navigation}) => {
    const [movies, setMovies] = useState([])

    const getData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/films`)
        const results = await response.json()
        setMovies(results)
    }
    useEffect( ()=>{
        getData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Welcome to the home page</Text>

            <ModalComponent/>

            <FlatList data={movies} renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Details', {item})}>
                    <Card>
                        <Text style={globalStyles.text}>{item.title}</Text>
                        <Image source={require('../../assets/images/soot-chihiro.png')} style={styles.image}/>
                    </Card>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id} />
        </View>
    )
}


const styles = StyleSheet.create({
    image:{
        width:50,
        height:50
    }
})