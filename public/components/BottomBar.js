import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import BB_1 from '../assets/images/bb_1.svg'
import BB_2 from '../assets/images/bb_2.svg'
import BB_3 from '../assets/images/bb_3.svg'
import BB_4 from '../assets/images/bb_4.svg'
import BB_5 from '../assets/images/bb_5.svg'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const BottomBar = ({nav}) => {

    return (
        <View style={styles.bottom}>
            <View style={{flexDirection:"row", justifyContent:"space-around", marginVertical:wp('2%')}}>
                <TouchableOpacity onPress={() => {alert("Perfil")}}>
                    <BB_1 style={{marginTop:wp('5.5%')}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert("Tarjeta")}}>
                    <BB_2 style={{marginTop:wp('5.5%'), marginLeft:wp('0.5%')}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert("Inicio")}}>
                    <BB_3 style={{marginLeft:wp('3%')}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert("Flechas")}}>
                    <BB_4 style={{marginTop:wp('5.5%')}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {alert("Etiqueta")}}>
                    <BB_5 style={{marginTop:wp('5.5%')}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottom:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'white'
    }
});

export default BottomBar;