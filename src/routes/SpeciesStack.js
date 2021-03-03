import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Header from '../shared/Header'
import {SpeciesDetails} from "../components/Details/SpeciesDetails";
import {Species} from "../components/Species";


export const SpeciesStack = () => {

    const SpeciesStack = createStackNavigator();

    return (
        <SpeciesStack.Navigator>
            <SpeciesStack.Screen
                name="Species"
                component={Species}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="Species"/> })}
            />
            <SpeciesStack.Screen
                name="SpeciesDetails"
                component={SpeciesDetails}
                options={{
                    title: 'Species details',
                    headerStyle:{
                        backgroundColor: '#ECE4D3',
                    }
                }}/>
        </SpeciesStack.Navigator>
    )
}
