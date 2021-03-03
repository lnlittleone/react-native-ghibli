import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font"
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeStack} from "./src/routes/HomeStack";
import {AboutStack} from "./src/routes/AboutStack";
import {LocationStack} from "./src/routes/LocationStack";
import {PeopleStack} from "./src/routes/PeopleStack";
import {SpeciesStack} from "./src/routes/SpeciesStack";
import {VehicleStack} from "./src/routes/VehicleStack";


const Drawer = createDrawerNavigator()

export default function App() {

    let [fontsLoaded] = useFonts({
        'PatrickHand': require('./assets/fonts/PatrickHand-Regular.ttf'),
    });

    if(!fontsLoaded){
        return <AppLoading/>
    } else {
        return (
            <NavigationContainer>
                <Drawer.Navigator>
                    <Drawer.Screen
                        name="Home"
                        component={HomeStack}
                     />
                    <Drawer.Screen
                        name="About"
                        component={AboutStack}
                    />
                    <Drawer.Screen
                        name="Locations"
                        component={LocationStack}/>
                    <Drawer.Screen
                        name="People"
                        component={PeopleStack}/>
                    <Drawer.Screen
                        name="Species"
                        component={SpeciesStack}/>
                    <Drawer.Screen
                        name="Vehicles"
                        component={VehicleStack}/>
                </Drawer.Navigator>

            </NavigationContainer>
        )
    }
}


