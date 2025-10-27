import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import Usuarios from "../screens/Usuarios/Usuarios";

const Tab = createBottomTabNavigator();

function HomeMenu(params) {
    return (

        <Tab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
            <Tab.Screen name="Home" component={Home} options={
                { tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> }
            } />
            <Tab.Screen name="Profile" component={Profile} options={
                { tabBarIcon: () => <AntDesign name="profile" size={24} color="black" /> }} />
            
            <Tab.Screen name="Usuarios" component={Usuarios} options={
                { tabBarIcon: () => <AntDesign name="user" size={24} color="black" /> }} />

        </Tab.Navigator>

    )
}

export default HomeMenu;