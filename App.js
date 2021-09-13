import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carrousel from './public/components/Carrousel';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './public/components/Login';
import Password from './public/components/Password';
import Register from './public/components/Register';
import RegHuella from './public/components/RegHuella';
import Dashboard from './public/components/Dashboard';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Nav = createNativeStackNavigator();

const Crrsl = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Carrousel nav={navigation}/>
    </View>
  )
}
  
const Log = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Login nav={navigation}/>
    </View>
  )
}

const Reg = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Register nav={navigation}/>
    </View>
  )
}

const Pass = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Password nav={navigation}/>
    </View>
  )
}

const Huella = ({navigation}) => {
  return(
    <View style={styles.container}>
      <RegHuella nav={navigation}/>
    </View>
  )
}

const Dash = ({navigation}) => {
  return(
    <View style={styles.container}>
      <Dashboard nav={navigation}/>
    </View>
  )
}

const App = () => {

  return (
    <NavigationContainer>
      <Nav.Navigator>
        <Nav.Screen name="Carrousel" component={Crrsl} options={{headerShown:false}}/>
        <Nav.Screen name="Log" component={Log} options={{headerShown:false}}/>
        <Nav.Screen name="Register" component={Reg} options={{headerShown:false}}/>
        <Nav.Screen name="IngPassword" component={Pass} options={{headerShown:false}}/>
        <Nav.Screen name="RegHuella" component={Huella} options={{headerShown:false}}/>
        <Nav.Screen name="Dashboard" component={Dash} options={{headerShown:false}}/>
      </Nav.Navigator>
    </NavigationContainer>
  );
};
 
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
      justifyContent: "center",
      alignItems: "center"
    }
})

export default App;