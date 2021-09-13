import React from "react";
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import DashboardNoObjetives from '../assets/images/dashboard_no_objectives.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Objectives = ({nav}) => {

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{marginTop:wp('3%'), marginHorizontal:wp('5.5%'),}}>
                    <Text style={{fontSize:wp('4%'), color:"#808080", fontFamily:'Poppins-Regular'}}>Aún no tienes ningún objetivo.</Text>
                    <Text style={{fontSize:wp('5.5%'), fontFamily:'Poppins-Bold'}}>Crear un objetivo nuevo.</Text>
                    <DashboardNoObjetives />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white"
    }
});

export default Objectives;