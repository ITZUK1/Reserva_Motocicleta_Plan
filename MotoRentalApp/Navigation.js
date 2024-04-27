import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import HomeScreens from "./screens/HomeScreens";
import SettingsScreens from "./screens/SettingsScreens";
import AgenciaScreens from "./screens/AgenciaScreen";

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'usuario') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Agencia') {
                        iconName = focused ? 'business' : 'business-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: [{ display: 'flex' }]
            })}
        >
            <Tab.Screen name="Home" component={HomeScreens} />
            <Tab.Screen name="usuario" component={SettingsScreens} />
            <Tab.Screen name="Agencia" component={AgenciaScreens} />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}
