import React from 'react';
import {LocationDetails} from "../components/Details/LocationDetails";
import {createStackNavigator} from "@react-navigation/stack";
import Header from '../shared/Header'
import {Locations} from "../components/Locations";


export const LocationStack = () => {

    const LocationStack = createStackNavigator();

    return (
        <LocationStack.Navigator>
            <LocationStack.Screen
                name="Location"
                component={Locations}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="Locations"/> })}
            />
            <LocationStack.Screen
                name="LocationDetails"
                component={LocationDetails}
                options={{
                    title: 'Location details',
                    headerStyle:{
                        backgroundColor: '#ECE4D3',
                    }
                }}/>
        </LocationStack.Navigator>
    )
}
