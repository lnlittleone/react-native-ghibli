import React from 'react';
import { Text, View} from 'react-native';
import {globalStyles} from "../../../styles/global";
import VerticalCard from "../../shared/VerticalCard";


export const PeopleDetails = ({route}) => {

    const item = route.params.item

    return (
        <View style={globalStyles.container}>
            <VerticalCard>
                <Text style={globalStyles.titleText}>{item.name}</Text>
                <Text style={globalStyles.text}>Gender : {item.gender}</Text>
                <Text style={globalStyles.text}>Age : {item.age}</Text>
                <Text style={globalStyles.text}>Eye color : {item.eye_color}</Text>
                <Text style={globalStyles.text}>Hair color : {item.hair_color}</Text>
            </VerticalCard>
        </View>
    )
}
