import React, { Component } from "react";
import {FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity, ScrollView} from "react-native";
//import {List} from "react-native-elements";
//import firebase from 'react-native-firebase';
import { createBottomTabNavigator } from 'react-navigation';

//Import der Screen-Komponenten und des Footers, wo die Navigtion stattfindet
import Startkomponente from './components/Startkomponente';
import Detailskomponente from './components/Detailskomponente';
import Chat from './components/Chat';


//firebase.database().goOnline();

class Startscreen extends Component{

  render(){
    return(
    <View style = {{flex:1, marginTop:30}}>
     <Detailskomponente navigation = {this.props.navigation}/>
    </View>

    );
  }
}

class Bookedscreen extends Component {

  render(){
    return(
      <View style = {{flex:1, marginTop:30}}>
        <Text>Booked </Text>
      </View>
    );
  }
}

class Chatscreen extends Component {
  render(){
    return(
      <View style = {{flex: 1, marginTop:30}}>
          <Chat navigation = {this.props.navigation}/>
      </View>
    );
  }
}

class Profilscreen extends Component {
  render(){
    return(
      <View style = {{flexDirection:'column', marginTop:30}}>
        <Text>Profil </Text>
      </View>
    );
  }
}

export default createBottomTabNavigator({
  Start: Startscreen,
  Booked: Bookedscreen,
  Chat: Chatscreen,
  Profil: Profilscreen,
});
