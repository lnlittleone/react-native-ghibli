import React from 'react';
import {Home} from "../components/Home";
import {MovieDetails} from "../components/Details/MovieDetails";
import {createStackNavigator} from "@react-navigation/stack";
import Header from '../shared/Header'

export const HomeStack = () => {

    const HomeStack = createStackNavigator();

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={Home}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="Ghibli App"/> })}
            />
            <HomeStack.Screen
                name="Details"
                component={MovieDetails}
                options={{
                    title: 'MovieDetails details',
                    headerStyle:{
                        backgroundColor: '#ECE4D3',
                    }
                }}/>
        </HomeStack.Navigator>
    )
}
