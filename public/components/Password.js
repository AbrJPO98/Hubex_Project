import React, {useState} from 'react';
import { Text, Button, TextInput, View, StyleSheet, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Reg_2 from '../assets/images/reg_2.svg';
import Back from '../assets/images/back.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Password = ({nav}) => {

    const back = () => {
        nav.navigate('Register');
    }

    const [sv1, ssv1] = useState(true);
    const [sv2, ssv2] = useState(faEyeSlash);
    
    const [sv3, ssv3] = useState(true);
    const [sv4, ssv4] = useState(faEyeSlash);

    const change = () => {
        switch (sv2) {
            case faEye:
                ssv1(true);
                ssv2(faEyeSlash);
                break;
            case faEyeSlash:
                ssv1(false);
                ssv2(faEye);
                break;
        }
    }
    
    const change2 = () => {
        switch (sv4) {
            case faEye:
                ssv3(true);
                ssv4(faEyeSlash);
                break;
            case faEyeSlash:
                ssv3(false);
                ssv4(faEye);
                break;
        }

    }

    const regHuella = () => {
        nav.navigate('RegHuella')
    }
    
    const volReg = () => {
        nav.navigate('Register');
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
                <View style={styles.container2}>
                        <Text style={{fontSize:wp('7%'), color:"#808080", fontFamily:"Poppins-ExtraBold", marginVertical:hp('6%')}}>Ingresa tu contraseña</Text>
                        <View style={{marginVertical:hp('1.5%')}}>
                            <Text style={{color:"#808080", fontSize:wp('3.1%'), marginLeft:wp('1.5%'), fontFamily:'Poppins-Regular'}}>Contraseña</Text>
                            <View style={{marginVertical:hp('0.2%'), flexDirection:"row"}}>
                                <TextInput style={styles.inputPass} secureTextEntry={sv1}/>
                                <View style={styles.iconBack}>
                                    <TouchableWithoutFeedback onPress={change}>
                                        <FontAwesomeIcon icon={ sv2 } size={hp('3%')} style={styles.icon}/>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={{marginVertical:hp('1.5%')}}>
                            <Text style={{color:"#808080", fontSize:wp('3.1%'), marginLeft:wp('1.5%'), fontFamily:'Poppins-Regular'}}>Repetir contraseña</Text>
                            <View style={{marginVertical:hp('0.2%'), flexDirection:"row"}}>
                                <TextInput style={styles.inputPass} secureTextEntry={sv3}/>
                                <View style={styles.iconBack}>
                                    <TouchableWithoutFeedback onPress={change2}>
                                        <FontAwesomeIcon icon={ sv4 } size={hp('3%')} style={styles.icon}/>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop:hp('6.19%'), marginVertical:hp('5.2%')}}>
                            <TouchableOpacity style={styles.buttonReg} onPress={regHuella}>
                                <Text style={{textAlign:"center", color:"white", fontFamily:'Poppins-Regular'}}>Registrar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={volReg}>
                                <Text style={{textAlign:"center", color:"#808080", marginTop:hp('3.75%'), fontFamily:'Poppins-Regular'}}>Atrás</Text>
                            </TouchableOpacity>
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
        flex:1.5,
        width:('100%'),
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#e5e5e5",
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    buttonReg: {
        backgroundColor: '#6dd8cb',
        width:wp('67%'),
        paddingVertical:hp('1.25%'),
        borderRadius:100
    },
    icon:{
        backgroundColor:"white",
        marginHorizontal:wp('2.4%'),
        marginVertical:hp('2%'),
        color:'#6dd8cb'
    },
    inputPass:{
        height:hp('6.6%'),
        width:wp('67%'),
        color:"#6dd8cb",
        backgroundColor:"white",
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
        fontFamily:'Poppins-Medium',
        paddingVertical:0
    },
    iconBack:{
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        width:wp('11.11%'),
        height:hp('6.6%'),
        backgroundColor:"white"
    }
})

export default Password;