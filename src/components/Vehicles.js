import React, {useState, useEffect} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../styles/global";
import Card from "../shared/Card";

export const Vehicles = ({navigation}) => {
    const [vehicles, setVehicles] = useState([])

    const getData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/vehicles`)
        const results = await response.json()
        setVehicles(results)
    }

    useEffect( ()=>{
        getData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={vehicles}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('VehicleDetails', {item})}>
                        <Card>
                            <Text style={globalStyles.text}>{item.name}</Text>
                            <Image source={require('../../assets/images/porco.png')} style={globalStyles.imageDetails}/>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id} />
        </View>
    )
}
