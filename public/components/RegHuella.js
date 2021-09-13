import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import Reg_2 from '../assets/images/reg_2.svg';
import Huella from '../assets/images/huella_dig.svg';
import Back from '../assets/images/back.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RegHuella = ({nav}) => {

    const back = () => {
        nav.navigate('IngPassword');
    }

    const reg = () => {
        nav.navigate('Register')
    }

    const ingresar = () => {
        nav.navigate('Dashboard')
    }

    return (
        <KeyboardAwareScrollView>
            <View style={{marginHorizontal:wp('7.5%'), marginTop:wp('7.5%')}}>
                <TouchableOpacity onPress={back}>
                    <Back/> 
                </TouchableOpacity> 
            </View>
            <View style={styles.container}>
                <View style={{flex:0.5}}>
                    <Reg_2 width="150"/>
                </View>
                <View style={{flex:1.5}}>
                    <View style={styles.container2}>
                        <Text style={{fontSize:wp('7%'), color:"#808080", fontFamily:"Poppins-ExtraBold", marginVertical:hp('5.95%')}}>Habilita tu FaceID</Text>
                        <View style={{marginVertical:hp('2.5%')}}>
                            <Huella width="150"/>
                        </View>
                        <View style={{marginTop:hp('3.5%')}}>
                            <TouchableOpacity style={styles.buttonReg} onPress={ingresar}>
                                <Text style={{textAlign:"center", color:"white", fontFamily:'Poppins-Regular'}}>Habilitar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={ingresar}>
                                <Text style={{textAlign:"center", color:"#808080", marginVertical:hp('3.25%'), fontFamily:'Poppins-Regular'}}>Ahora no</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </KeyboardAwareScrollView>
    );
}
   
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:wp('100%'),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"white"
    },
    container2:{
        flex:1,
        width:wp('100%'),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#e5e5e5",
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    buttonReg: {
        backgroundColor: '#6dd8cb',
        width:wp('75%'),
        paddingVertical:hp('1.25%'),
        marginTop:hp('1.25%'),
        borderRadius:100
    }
})

export default RegHuella;
