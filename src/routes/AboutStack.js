import React from 'react';

import {createStackNavigator} from "@react-navigation/stack";
import {About} from "../components/About";
import Header from "../shared/Header";

export const AboutStack = () => {

    const AboutStack = createStackNavigator();

    return (
        <AboutStack.Navigator>
            <AboutStack.Screen
                name="About"
                component={About}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="About the App"/> })}/>
        </AboutStack.Navigator>
    )
}
