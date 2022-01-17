import React, {useState} from "react";
import { Animated, Text, View, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import jwt_decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {devURL} from '../../mainURL';
import { getObjectiveType } from "../../objectiveType";
import axios from "axios";

const EditObjectiveBuy1 = ({obj, setScreen}) => {

    const [showDesc, setShowDesc] = useState({"text":3.1, "textInput":13, "margin":1});
    const [showDescText, setShowDescText] = useState({"texto":'- Eliminar', 'modo':1});

    const [objectiveName, setObjectiveName] = useState(obj.name);
    const [descText, setDescText] = useState(obj.description);

    const [disButt, setDisButt] = useState(false);

    function showDescEvent(){
        switch (showDescText.modo) {
            case 0:
                setDescText(obj.description);
                setShowDescText({"texto":'- Eliminar', 'modo':1});
                setShowDesc({"text":3.1, "textInput":13, "margin":1});
            break;
        
            case 1:
                setShowDescText({"texto":'+ Agregar Descripción', 'modo':0});
                setShowDesc({"text":0, "textInput":0, "margin":0});
                setDescText('');
            break;
        }
    }

    async function continuar(){
        setDisButt(true);
        if(objectiveName.replace(/\s/g,'')!=='' && descText.replace(/\s/g,'')!==''){
            const res = await axios.put(devURL()+'/api/objective/updateObjective', {
                'id':obj.objectiveId,
                'nName':objectiveName,
                'nDescription':descText,
                'type':'Compra',
                'step':1
            });
            console.log(res.data.msg);
            if (res.data.success) {
                setDisButt(false);
                setScreen('2');
            }
        } else {
            setDisButt(false);
            alert('Debe llenar todos los espacios');
        }
    }

    return (
        <KeyboardAwareScrollView>
            <View style={{marginBottom:hp('0.5%'), marginTop:hp('8%')}}>
                <Text style={{fontSize:wp('5%'), fontFamily:'Poppins-ExtraBold', color:'#7b7b7b', textAlign:'left', width:wp('85%')}}>¿Qué quiere comprar?</Text>
                <Text style={([styles.text,{width:wp('70%')}])}>Deja que el asistente virtual te ayude a crear tus objetivos.</Text>
            </View>
            <View style={{marginTop:hp('1%'), marginBottom:hp('1%')}}>
                <TextInput value={objectiveName} style={([styles.input,{borderRadius:20}])} onChangeText={text => {setObjectiveName(text)}}/>
            </View>
            <View style={{marginVertical:hp(showDesc.margin+'%')}}>
                <Text style={([styles.text, {fontSize:wp(showDesc.text+'%'),marginLeft:wp('3.5%')}])}>Descripción</Text>
                <TextInput multiline={true} style={([styles.input, {height:hp(showDesc.textInput+'%')}])} value={descText} onChangeText={text => {setDescText(text)}}/>
            </View>
            <View style={{marginVertical:hp('2%'), alignSelf:'flex-end'}}>
                <TouchableOpacity onPress={showDescEvent}>
                    <Text style={styles.textDescription}>{showDescText.texto}</Text>
                </TouchableOpacity>
                </View>
            <View style={{marginVertical:hp('1%')}}>
                <TouchableOpacity style={styles.button} onPress={continuar} disabled={disButt}>
                    <Text style={styles.textButtonCreate}>Continuar</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    input:{
        alignSelf:'center',
        height:hp('6.5%'),
        width:wp('82.5%'),
        color:"#6dd8cb",
        backgroundColor:"white",
        borderRadius:3,
        fontFamily:'Poppins-Medium',
        borderColor:'#ff5b5b',
        paddingVertical:0
    },
    text:{
        color:"#808080",
        fontSize:wp('3.1%'),
        marginLeft:wp('1.5%'),
        marginVertical:hp('0.5%'),
        fontFamily:'Poppins-Regular'
    },
    textDescription:{
        color:"#808080",
        fontSize:wp('3.5%'),
        marginVertical:hp('0.5%'),
        marginRight:wp('9%'),
        fontFamily:'Poppins-Regular'
    },
    textButtonCreate:{
        textAlign:"center",
        color:"white",
        fontFamily:'Poppins-Bold'
    },
    button: {
        alignSelf:'center',
        backgroundColor: '#6dd8cb',
        width:wp('80%'),
        paddingVertical:hp('1%'),
        marginVertical:hp('0.1%'),
        borderRadius:100
    },
});

export default EditObjectiveBuy1;