import React from 'react';
import AppLoading from 'expo-app-loading';
import {useFonts} from "expo-font"
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from "@react-navigation/drawer";
import {HomeStack} from "./src/routes/HomeStack";
import {AboutStack} from "./src/routes/AboutStack";


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
                </Drawer.Navigator>
            </NavigationContainer>
        )
    }
}


