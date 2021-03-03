import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Header from '../shared/Header'
import {VehicleDetails} from "../components/Details/VehicleDetails";
import {Vehicles} from "../components/Vehicles";


export const VehicleStack = () => {

    const VehicleStack = createStackNavigator();

    return (
        <VehicleStack.Navigator>
            <VehicleStack.Screen
                name="Vehicles"
                component={Vehicles}
                options={({navigation}) => ({ header: ()=> <Header navigation={navigation} title="Vehicles"/> })}
            />
            <VehicleStack.Screen
                name="VehicleDetails"
                component={VehicleDetails}
                options={{
                    title: 'Vehicle details',
                    headerStyle:{
                        backgroundColor: '#ECE4D3',
                    }
                }}/>
        </VehicleStack.Navigator>
    )
}
