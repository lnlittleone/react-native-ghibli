import React, {useState, useEffect} from 'react';
import {Text, FlatList, ScrollView} from 'react-native';
import {globalStyles} from "../../../styles/global";
import VerticalCard from "../../shared/VerticalCard";


export const SpeciesDetails = ({route}) => {

    const item = route.params.item
    const [films, setFilms]= useState([])

    const getAllMovies = async () => {
        Promise.all(item.films.map(film => fetch(film)))
            .then(response => Promise.all(response.map(res => res.json()))
            .then(films => setFilms(films)))
    }

    useEffect(()=> {
        getAllMovies()
    },[])

    return (
        <ScrollView style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.name}</Text>
                <Text style={globalStyles.text}>Classification : {item.classification}</Text>
                <Text style={globalStyles.text}>Eye color : {item.eye_colors}</Text>
                <Text style={globalStyles.text}>Hair color : {item.hair_colors}</Text>
                <Text style={globalStyles.text}>Featured in : </Text>

                    <FlatList
                        data={films}
                        renderItem={({ item }) => (
                            <Text style={globalStyles.text}> - {item.title}</Text>
                        )}
                        keyExtractor={item => item.id} />

            </VerticalCard>
        </ScrollView>
    )
}
