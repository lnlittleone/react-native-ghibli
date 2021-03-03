import React, {useState, useEffect} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../styles/global";
import Card from "../shared/Card";

export const Species = ({navigation}) => {
    const [species, setSpecies] = useState([])

    const getData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/species`)
        const results = await response.json()
        setSpecies(results)
    }

    useEffect( ()=>{
        getData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={species}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('SpeciesDetails', {item})}>
                        <Card>
                            <Text style={globalStyles.text}>{item.name}</Text>
                            <Image source={require('../../assets/images/totoro-dodo.png')} style={globalStyles.imageDetails}/>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id} />
        </View>
    )
}
