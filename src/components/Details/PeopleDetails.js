import React, {useState, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {globalStyles} from "../../../styles/global";
import VerticalCard from "../../shared/VerticalCard";


export const PeopleDetails = ({route}) => {

    const item = route.params.item

    const [films, setFilms]= useState([])
    const [species, setSpecies] = useState('')

    const getAllMovies = async () => {
        Promise.all(item.films.map(film => fetch(film)))
            .then(response => Promise.all(response.map(res => res.json()))
                .then(films => setFilms(films)))
    }

    const getSpecie = async() => {
        const specie = await fetch(item.species)
        const result = await(specie.json())
        setSpecies(result)
    }

    useEffect(()=> {
        getAllMovies()
        getSpecie()
    },[])
    return (
        <View style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.name}</Text>
                <Text style={globalStyles.text}>Gender : {item.gender}</Text>
                <Text style={globalStyles.text}>Age : {item.age}</Text>
                <Text style={globalStyles.text}>Eye color : {item.eye_color}</Text>
                <Text style={globalStyles.text}>Hair color : {item.hair_color}</Text>
                <Text style={globalStyles.text}>Species : {species.name}</Text>
                <Text style={globalStyles.text}>Featured in : </Text>

                <FlatList
                    data={films}
                    renderItem={({ item }) => (
                        <Text style={globalStyles.text}> - {item.title}</Text>
                    )}
                    keyExtractor={item => item.id} />
            </VerticalCard>
        </View>
    )
}
