import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import LightBall from '../assets/images/light_ball.svg';
import Notification from '../assets/images/notification.svg';
import SidebarIcon from '../assets/images/sidebar_icon.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const NavBar = ({nav}) => {

    return (
        <View style={styles.top}>
            <View style={{flexDirection:"row", marginTop:hp('2%')}}>
                <View style={{marginRight:wp('25%'), marginTop:hp('2%')}}>
                    <TouchableOpacity onPress={() => {nav.openDrawer()}}>
                        <SidebarIcon />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection:"row", marginLeft:wp('35%')}}>
                    <View style={{marginHorizontal:wp('1%')}}>
                        <TouchableOpacity onPress={() => {alert("Tips")}}>
                            <LightBall />
                        </TouchableOpacity>
                    </View>
                    <View style={{marginHorizontal:wp('1%')}}>
                        <TouchableOpacity onPress={() => {alert("Notificaciones")}}>
                            <Notification />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{marginTop:wp('5.5%')}}>
                <View style={{flexDirection:"row"}}>
                    <View style={{alignContent:'flex-start', width:wp('50%')}}>
                        <Text style={{fontSize:wp('5.5%'), fontFamily:'Poppins-Regular', marginLeft:wp('5%')}}> Hola! </Text>
                        <Text style={{fontSize:wp('5.5%'), color:"#6dd8cb", fontFamily:'Poppins-Bold', marginLeft:wp('5%')}}> User Name! </Text>
                    </View>
                    <View style={{ alignItems:'flex-end', width:wp('50%')}}>
                        <TouchableOpacity style={{height:wp('18%'), width:wp('18%'), borderWidth:2, borderColor:"#6dd8cb", borderRadius:100, marginRight:wp('8%')}}></TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    top:{
        flex:1,
        alignItems:"center",
        backgroundColor:"white"
    }
});

export default NavBar;