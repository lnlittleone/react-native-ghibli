import React, { useState, useEffect } from 'react';
import { Text, View} from 'react-native';
import {globalStyles} from "../../../styles/global";
import VerticalCard from "../../shared/VerticalCard";


export const VehicleDetails = ({route}) => {

    const [pilot, setPilot]= useState('')
    const [film, setFilm]= useState('')
    const item = route.params.item

    const getPilot = async() => {
        const response = await fetch(`${item.pilot}`)
        const results = await response.json()
        setPilot(results)
    }

    const getFilm = async() => {
        const response = await fetch(`${item.films}`)
        const results = await response.json()
        setFilm(results)
    }

    useEffect(()=> {
        getPilot()
        getFilm()
    },[])

    return (
        <View style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.name}</Text>
                <Text style={globalStyles.text}>{item.description}</Text>
                <Text style={globalStyles.text}>Class : {item.vehicle_class}</Text>
                <Text style={globalStyles.text}>Length : {item.length}</Text>
                <Text style={globalStyles.text}>Pilot : {pilot.name}</Text>
                <Text style={globalStyles.text}>Featured in : {film.title}</Text>
            </VerticalCard>
        </View>
    )
}
