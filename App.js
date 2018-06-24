import React, { Component } from "react";
import {FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
//import {List} from "react-native-elements";
//import firebase from 'react-native-firebase';
import { createBottomTabNavigator } from 'react-navigation';

//Import der Screen-Komponenten und des Footers, wo die Navigtion stattfindet
import Startkomponente from './components/Startkomponente';
import Detailskomponente from './components/Detailskomponente';
import Chat from './components/Chat';

import Icon from 'react-native-elements';


//firebase.database().goOnline();

class Startscreen extends Component{
  static navigationOptions = {
    tabBarLabel: 'EVENT',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/nav/calendar.png')}
        style={[styles.iconCalendar, { tintColor: tintColor }]}
      />
    ),
  };
  render(){
    return(
    <View style = {{flex:1, marginTop:30}}>
     <Startkomponente navigation = {this.props.navigation}/>
    </View>

    );
  }
}

class Bookedscreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'GEBUCHT',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/nav/shield.png')}
        style={[styles.iconShield, { tintColor: tintColor }]}
      />
    ),
  };
  render(){
    return(
      <View style = {{flex:1, marginTop:30}}>
        <Text>Booked </Text>
      </View>
    );
  }
}

class Chatscreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'CHAT',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/nav/message-square.png')}
        style={[styles.iconMessage, { tintColor: tintColor }]}
      />
    ),
  };
  render(){
    return(
      <View style = {{flex: 1, marginTop:30}}>
          <Chat navigation = {this.props.navigation}/>
      </View>
    );
  }
}

class Profilscreen extends Component {
  static navigationOptions = {
    tabBarLabel: 'PROFIL',
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('./resources/nav/user.png')}
        style={[styles.iconUser, { tintColor: tintColor }]}
      />
    ),
  };
  render(){
    return(
      <View style = {{flexDirection:'column', marginTop:30}}>
        <Text>Profil </Text>
      </View>
    );
  }
}


export default createBottomTabNavigator(
  {
    Start: {
      screen: Startscreen
    },
    Booked: {
      screen: Bookedscreen
    },
    Chat: {
      screen:Chatscreen
    },
    Profil: {
      screen: Profilscreen
    },
  },
  {
    initialRouteName: "Start",
    order: ["Start", "Booked", "Chat", "Profil"],
		animationEnabled: true,
		tabBarOptions: {
			activeTintColor: '#EB5757',
			inactiveTintColor: 'grey',
			showLabel: true,
      showIcon: true,
      labelStyle: {fontWeight: 'bold'}
		}
	}
);


const styles = StyleSheet.create({
  iconCalendar: {
    width: 18,
    height: 20
  },
  iconShield: {
    width: 18,
    height: 22
  },
  iconMessage: {
    width: 18,
    height: 18
  },
  iconUser: {
    width: 18,
    height: 20
  }
});
