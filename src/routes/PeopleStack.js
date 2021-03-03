import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Header from '../shared/Header'
import {People} from "../components/People";
import {PeopleDetails} from "../components/Details/PeopleDetails";


export const PeopleStack = () => {

    const PeopleStack = createStackNavigator();

    return (
        <PeopleStack.Navigator>
            <PeopleStack.Screen
                name="People"
                component={People}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="People"/> })}
            />
            <PeopleStack.Screen
                name="PeopleDetails"
                component={PeopleDetails}
                options={{
                    title: 'People details',
                    headerStyle:{
                        backgroundColor: '#ECE4D3',
                    }
                }}/>
        </PeopleStack.Navigator>
    )
}
