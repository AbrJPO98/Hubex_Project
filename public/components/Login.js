import React, {useState} from 'react';
import { Text, ScrollView, TextInput, View, StyleSheet, useWindowDimensions, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Log_1 from '../assets/images/log_1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Login = ({nav}) => {

    const [sv1, ssv1] = useState(true);
    const [sv2, ssv2] = useState(faEyeSlash);

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

    const reg = () => {
        nav.navigate('Register')
    }

    const ingresar = () => {
        nav.navigate('Dashboard')
    }


    return (
        <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <View style={{flex:1}}>
                        <Log_1 width="300"/>
                    </View>
                    <View style={{flex:1}}>
                        <View style={styles.container2}>
                            <Text style={{fontSize:wp('7.75%'), color:"#808080", fontFamily:"Poppins-ExtraBold", marginVertical:hp('2%')}}>Ingresar</Text>
                            <View style={{marginVertical:hp('0.5%')}}>
                                <Text style={{color:"#808080", fontSize:wp('3.1%'), marginLeft:wp('1.5%'), fontFamily:'Poppins-Regular'}}>Email o Teléfono</Text>
                                <TextInput style={styles.input}/>
                            </View>
                            <View style={{marginVertical:hp('0.5%')}}>
                                <Text style={{color:"#808080", fontSize:wp('3.1%'), marginLeft:wp('1.5%'), fontFamily:'Poppins-Regular'}}>Contraseña</Text>
                                <View style={{flexDirection:"row"}}>
                                    <TextInput style={styles.inputPass} secureTextEntry={sv1}/>
                                    <View style={styles.iconBack}>
                                        <TouchableWithoutFeedback onPress={change}>
                                            <FontAwesomeIcon icon={ sv2 } size={hp('2.5%')} style={styles.icon}/>
                                        </TouchableWithoutFeedback>
                                    </View>
                                </View>
                                <TouchableOpacity>
                                    <Text style={{color:"#6dd8cb", textAlign:"right", marginVertical:hp('0.35%'), fontSize:wp('3.65%'), fontFamily:'Poppins-Regular'}}>Olvidé mi contraseña</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{marginBottom:hp('3.20%'), marginTop:hp('6.3%'), alignItems:'center'}}>
                                <TouchableOpacity style={styles.button} onPress={ingresar}>
                                    <Text style={{textAlign:"center", color:"#6dd8cb", fontFamily:'Poppins-Regular'} }>Ingresar</Text>
                                </TouchableOpacity>
                                <View style={{flexDirection:"row", marginTop:hp('1%')}}>
                                    <Text style={{textAlign:"center", color:"#808080", fontFamily:'Poppins-Regular'}}>Soy un usuario nuevo. </Text>
                                    <TouchableOpacity onPress={reg}>
                                        <Text style={{textAlign:"center", color:"#6dd8cb", fontFamily:'Poppins-Regular'}}>Crear una cuenta nueva.</Text>
                                    </TouchableOpacity>
                                </View>
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
    input:{
        height:hp('4.4%'),
        width:wp('75.8%'),
        color:"#6dd8cb",
        backgroundColor:"white",
        borderRadius:3,
        fontFamily:'Poppins-Medium',
        paddingVertical:0

    },
    inputPass:{
        height:hp('4.4%'),
        width:wp('67%'),
        color:"#6dd8cb",
        backgroundColor:"white",
        borderTopLeftRadius:3,
        borderBottomLeftRadius:3,
        fontFamily:'Poppins-Medium',
        paddingVertical:0
    },
    button: {
        backgroundColor: 'white',
        width:wp('80%'),
        paddingVertical:hp('1.5%'),
        marginVertical: hp('1.25%'),
        marginHorizontal: wp('1.25%'),
        borderRadius:100
    },
    icon:{
        backgroundColor:"white",
        marginHorizontal:wp('2%'),
        marginVertical:hp('1%'),
        color:'#6dd8cb'
    },
    iconBack:{
        borderTopRightRadius:3,
        borderBottomRightRadius:3,
        width:wp('8.8%'),
        height:hp('4.4%'),
        backgroundColor:"white"
    }
})

export default Login;
