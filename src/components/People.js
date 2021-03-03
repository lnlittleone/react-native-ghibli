import React, {useState, useEffect} from 'react'
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "../../styles/global";
import Card from "../shared/Card";

export const People = ({navigation}) => {
    const [people, setPeople] = useState([])

    const getData = async () => {
        const response = await fetch(`https://ghibliapi.herokuapp.com/people`)
        const results = await response.json()
        setPeople(results)
    }

    useEffect( ()=>{
        getData()
    }, [])

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={people}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('PeopleDetails', {item})}>
                        <Card>
                            <Text style={globalStyles.text}>{item.name}</Text>
                            <Image source={require('../../assets/images/mouse.png')} style={globalStyles.imageDetails}/>
                        </Card>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id} />
        </View>
    )
}
