import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import Objectives from "./Objectives";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "./About";
import Profile from "./Profile";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Drawer = createDrawerNavigator();

const Abt = () => {
    return(
        <View style={{flex:1}}>
            <About />
        </View>
    );
}

const Prf = () => {
    return(
        <View style={{flex:1}}>
            <Profile />
        </View>
    );
}

const Init = ({navigation}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:0.325}}>
                <NavBar nav={navigation}/>
            </View>
            <View style={{flex:1}}>
                <Objectives />
            </View>
            <View style={{flex:0.165}}>
                <BottomBar />
            </View>
        </View>
    );
}

const Dashboard = () => {
    return (
        <View style={{flex:1}}>
            <View style={{width:wp('100%')}}/>
            <Drawer.Navigator >
                <Drawer.Screen name="Initial" component={Init} options={{headerShown:false, drawerActiveTintColor:'#6dd8cb'}}/>
                <Drawer.Screen name="Profile" component={Prf} options={{headerShown:false, drawerActiveTintColor:'#6dd8cb'}}/>
                <Drawer.Screen name="About" component={Abt} options={{headerShown:false, drawerActiveTintColor:'#6dd8cb'}}/>
            </Drawer.Navigator>
        </View>
    );
}

export default Dashboard;