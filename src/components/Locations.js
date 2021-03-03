import React, {useState, useEffect} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../styles/global";
import Card from "../shared/Card";

export const Locations = ({navigation}) => {
    const [locations, setLocations] = useState([])

    const getData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/locations`)
        const results = await response.json()
        setLocations(results)
    }

    useEffect( ()=>{
        getData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={locations}
                renderItem={({ item }) => (
                <TouchableOpacity onPress={()=>navigation.navigate('LocationDetails', {item})}>
                    <Card>
                        <Text style={globalStyles.text}>{item.name}</Text>
                        <Image source={require('../../assets/images/totoro-leaf.png')} style={globalStyles.imageDetails}/>
                    </Card>
                </TouchableOpacity>
            )}
              keyExtractor={item => item.id} />
        </View>
    )
}
