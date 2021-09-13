import React from 'react';
import { Text, Button, TextInput, View, StyleSheet, useWindowDimensions, TouchableOpacity } from 'react-native';
import Reg_1 from '../assets/images/reg_1.svg';
import Back from '../assets/images/back.svg';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const Register = ({nav}) => {
    
    const {width} = useWindowDimensions();
    
    const back = () => {
        nav.navigate('Log');
    }

    const ingPass = () => {
        nav.navigate('IngPassword')
    }
    
    const volLog = () => {
        nav.navigate('Log')
    }

    return (
        <KeyboardAwareScrollView >
            <View style={{marginHorizontal:wp('7.5%'), marginTop:wp('7.5%')}}>
                <TouchableOpacity onPress={back}>
                    <Back/> 
                </TouchableOpacity> 
            </View>
            <View style={styles.container}>
                <View style={{flex:0.5}}>
                    <Reg_1 width="175"/>
                </View>
                <View style={{flex:1.5}}>
                    <View style={([styles.container2, {width}])}>
                        <Text style={{fontSize:wp('7.75%'), color:"#808080", fontFamily:"Poppins-ExtraBold", marginTop:hp('2%')}}>Crear una cuenta</Text>
                        <View style={{marginVertical:hp('0.7%')}}>
                            <Text style={styles.text}>Nombre</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{marginVertical:hp('0.7%')}}>
                            <Text style={styles.text}>Primer apellido</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{marginVertical:hp('0.7%')}}>
                            <Text style={styles.text}>Segundo apellido</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{marginVertical:hp('0.7%')}}>
                            <Text style={styles.text}>Email</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{marginVertical:hp('0.7%')}}>
                            <Text style={styles.text}>Teléfono</Text>
                            <TextInput style={styles.input}/>
                        </View>
                        <View style={{marginTop:hp('2.19%')}}>
                            <TouchableOpacity style={styles.button} onPress={ingPass}>
                                <Text style={{textAlign:"center", color:"white", fontFamily:'Poppins-Regular'}}>Siguiente</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{flexDirection:"row", marginTop:hp('1.85%'), marginBottom:hp('1.75%')}}>
                            <Text style={{textAlign:"center", color:"#808080", fontFamily:'Poppins-Regular'}}>Ya tengo mi cuenta. </Text>
                            <TouchableOpacity onPress={volLog}>
                                <Text style={{textAlign:"center", color:"#6dd8cb", fontWeight:"600", fontFamily:'Poppins-Regular'}}>Ingresar.</Text>
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
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#e5e5e5",
        borderTopStartRadius:50,
        borderTopEndRadius:50
    },
    input:{
        height:hp('5%'),
        width:wp('76%'),
        color:"#6dd8cb",
        backgroundColor:"white",
        borderRadius:3,
        fontFamily:'Poppins-Medium',
        paddingVertical:0
    },
    button: {
        backgroundColor: '#6dd8cb',
        width:wp('76%'),
        paddingVertical:hp('1%'),
        borderRadius:100
    },
    text:{
        color:"#808080",
        fontSize:wp('3.1%'),
        marginLeft:wp('1.5%'),
        fontFamily:'Poppins-Regular'
    }
})

export default Register;