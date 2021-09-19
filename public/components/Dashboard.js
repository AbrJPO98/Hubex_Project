import React from "react";
import { Text, View, StyleSheet } from "react-native";
import BottomBar from "./BottomBar";
import NavBar from "./NavBar";
import Objectives from "./Objectives";
import { createDrawerNavigator } from '@react-navigation/drawer';
import About from "./About";
import Profile from "./Profile";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from "axios";

const Drawer = createDrawerNavigator();

const Abt = () => {

    /*const validarToken = () => {
        try {
            var result;
            const res = await axios.post('http://10.0.2.2:3088/auth/token', { "email": tv1, "password":tv2 });
            result = res.data;
            storeData(result.data.token, result.data.refreshToken);
            if(result.success){
                nav.navigate('Dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }*/

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