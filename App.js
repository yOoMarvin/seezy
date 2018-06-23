import React, { Component } from "react";
import {FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity, ScrollView} from "react-native";
//import {List} from "react-native-elements";
//import firebase from 'react-native-firebase';
import { createBottomTabNavigator } from 'react-navigation';

//Import der Screen-Komponenten und des Footers, wo die Navigtion stattfindet
import Startkomponente from './components/Startkomponente';

//firebase.database().goOnline();

class Startscreen extends Component{

  render(){
    return(
    <View style = {{flex:1, marginTop:30}}>
     <Startkomponente navigation = {this.props.navigation}/>
    </View>

    );
  }
}

class Bookedscreen extends Component {

  render(){
    return(
      <View style = {{flex:1, marginTop:30}}>
      <Text>Chat </Text>
      </View>
    );
  }
}

class Chatscreen extends Component {
  render(){
    return(
      <View style = {{flex: 1, marginTop:30}}>
          <Text>Chat </Text>
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
  Booked: Chatscreen,
  Chat: Chatscreen,
  Profil: Profilscreen,
});
