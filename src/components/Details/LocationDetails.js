import React, { useState, useEffect } from 'react';
import {FlatList, Text, View} from 'react-native';
import {globalStyles} from "../../../styles/global";
import VerticalCard from "../../shared/VerticalCard";


export const LocationDetails = ({route}) => {

    const item = route.params.item

    const [residents, setResidents] = useState([])

    const getAllResidents = async () => {
        Promise.all(item.residents.map(resident => fetch(resident)))
            .then(response => Promise.all(response.map(res => res.json()))
                .then(resident => setResidents(resident)))
    }

    useEffect(()=> {
        getAllResidents()
    },[])

    return (
        <View style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.name}</Text>
                <Text style={globalStyles.text}>Climate : {item.climate}</Text>
                <Text style={globalStyles.text}>Terrain : {item.terrain}</Text>
                <Text style={globalStyles.text}>Suface water : {item.surface_water}</Text>
                <Text style={globalStyles.text}>Residents :</Text>

                {residents === []
                    ? <Text style={globalStyles.text}>N/A</Text>
                    :<FlatList
                        data={residents}
                        renderItem={({ item }) => (
                            <Text style={globalStyles.text}> - {item.name}</Text>)}
                        keyExtractor={item => item.id} />
                }
                <FlatList
                    data={residents}
                    renderItem={({ item }) => (
                            <Text style={globalStyles.text}> - {item.name}</Text>)}
                    keyExtractor={item => item.id} />

            </VerticalCard>
        </View>
    )
}
