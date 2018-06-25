import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "../resources/detail/credit-card.png",
    title: "something"
  },
  {
    imageUrl: "../resources/detail/shield.png",
    title: "something2"
  },
  {
    imageUrl: "../resources/detail/umbrella.png",
    title: "something3"
  },

  {
    imageUrl: "../resources/detail/navigation.png",
    title: "something3"
  },

  {
    imageUrl: "../resources/detail/thief.png",
    title: "something3"
  },

  {
    imageUrl: "../resources/detail/tooth.png",
    title: "something3"
  }
];



export default class Bookedkomponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  showAlert() {
    Alert.alert('High Five!', 'Viel Spaß bei deinem Event! Jetzt heißt es nur noch genießen. Den Rest machen wir.',
      [{ text: 'OK', onPress: () => {console.log("this");} }],
      { cancelable: false });
  }

  render() {
    return (
      <ScrollView>
        {this.showAlert(this)}
        <View>
          <Text style={styles.heading}> Meine Events </Text>
        </View>

        <Card
          image={require('../resources/detail/currentbooked.png')}
          containerStyle={{ padding: 5, width: '95%'}}
        >
          <Text> Public Viewing </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />
          <Text>Biergarten Schlosspark {"\n"}</Text>
          <Text> 30.06.2018 </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />
          <Text>Mein Schutz: Basic </Text>
          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />

        </Card>

        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 20
          }}
        />

        <Text style={styles.heading}> Beendet </Text>

        <Card
          image={require('../resources/detail/pastbooked.png')}
          containerStyle={{ width: '95%' }}
        >
        </Card>

        <Card
          image={require('../resources/detail/pastbooked.png')}
          containerStyle={{ width: '95%' }}
        >
        </Card>

      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  headerImage: {
    flex: 1,
    alignSelf: 'stretch',
    height: 150,
    width: '100%'
  },

  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    height: 110,
    width: '100%'
  },

  icon: {
    width: '12%',
    height: 50
  },

  //TODO size anpassen
  packages: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //width:'100%',
    height: 80
  },

  container: {
    alignItems: 'center',
  },

  price: {
    fontSize: 20,
    fontWeight: 'bold'
  },

  image: {
    height: 80,
    width: 200
  },

  payOptions: {
    width: 150,
    height: 80
  },
  textdesc: {
    fontSize: 15
  },

  popup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }

});
