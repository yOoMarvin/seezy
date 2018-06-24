import React, { Component } from "react";
import {FlatList, View, Image, Text, ActivityIndicator, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {SearchBar} from "react-native-elements";
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

//Import der Screen-Komponenten und des Footers, wo die Navigtion stattfindet
import Startkomponente from './components/Startkomponente';
import Detailskomponente from './components/Detailskomponente';
import Chat from './components/Chat';
import Kaufkomponente from './components/Kaufkomponente';

import Icon from 'react-native-elements';


//firebase.database().goOnline();

class Startscreen extends Component{
  static navigationOptions = {
    headerTitle: <SearchBar
                    lightTheme
                    placeholder = 'Suche...'
                    containerStyle = {{backgroundColor: 'transparent',
                                      borderWidth: 0, //no effect
                                      shadowColor: 'white', //no effect
                                      borderBottomColor: 'transparent',
                                      borderTopColor: 'transparent',
                                      width: '100%'}}
                    inputStyle = {{ backgroundColor: 'lightgrey' }}
                     />,
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

class DetailsScreen extends Component {
  render() {
    return(
      <Detailskomponente navigation={this.props.navigation} />
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
        <Kaufkomponente navigation = {this.props.navigation}/>
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
        <Detailskomponente navigation = {this.props.navigation}/>
      </View>
    );
  }
}


const EventStack = createStackNavigator({
  Home: Startscreen,
  Details: DetailsScreen,
});


export default createBottomTabNavigator(
  {
    Start: EventStack,
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
  },
});
