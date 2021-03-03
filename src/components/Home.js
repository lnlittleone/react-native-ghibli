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

            <ModalComponent>
                <Text style={globalStyles.text}>Here's some good luuuuuv !</Text>
                <Image source={require('../../assets/images/toto-logo.png')} style={styles.modalImage}/>
            </ModalComponent>

            <FlatList data={movies} renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Details', {item})}>
                    <Card>
                        <Text style={globalStyles.text}>{item.title}</Text>
                        <Image source={require('../../assets/images/soot-chihiro.png')} style={globalStyles.imageDetails}/>
                    </Card>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.id} />
        </View>
    )
}


const styles = StyleSheet.create({
    modalImage:{
        width:300,
        height:400,
    }
})