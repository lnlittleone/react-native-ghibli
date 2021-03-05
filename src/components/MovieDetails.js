import React, { useState, useEffect } from 'react';
import { Text, View} from 'react-native';
import {globalStyles} from "../../styles/global";
import VerticalCard from "../shared/VerticalCard";


export const MovieDetails = ({route}) => {

    const item = route.params.item

    const [vehicles, setVehicles] = useState([])

    const getVehicles = async () => {
        const response = await fetch(item.vehicles)
        const results = await response.json()
        setVehicles(results)
    }
    useEffect( ()=>{
        getVehicles()
    }, [])

    return (
        <View style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.original_title}</Text>
                <Text style={globalStyles.titleText}>{item.title}</Text>
                <Text style={globalStyles.text}>{item.release_date}</Text>
                <Text style={globalStyles.text}>{item.description}</Text>
            </VerticalCard>
        </View>
    )
}
