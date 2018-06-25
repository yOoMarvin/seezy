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
          <Text style={styles.heading}>Meine Events</Text>
          <Text style={styles.subheading}>Aktuell</Text>
        </View>

        <Card
          image={require('../resources/detail/currentbooked.png')}
          containerStyle={{ width: '95%' }}
        >
          <Text style={[styles.subheading, styles.centerText]}>SV Insurathon</Text>
          <View style={styles.horizontalDivider}/>
          <Text style={styles.centerText}>Biergarten Schlosspark {"\n"}</Text>
          <Text style={styles.centerText}> 30.06.2018 </Text>
          <View style={styles.horizontalDivider}/>
          <Text style={styles.centerText}>Mein Schutz: Basic </Text>
          <View style={styles.horizontalDivider}/>
          <View style={[styles.row, styles.centerText]}>
            <Image 
              source={require('../resources/gift.png')}
              style = {styles.iconGift}
            />
            <TouchableOpacity style={{marginLeft: 12}}>
              <Text style={{color: '#EB5757', padding: 0}}>Freigetränk sichern</Text>
            </TouchableOpacity>
          </View>

        </Card>

        <View style={styles.horizontalDivider}/>

        <Text style={styles.subheading}> Beendet </Text>

        <Card
          containerStyle={{ width: '95%' }}
        >
          <View style={styles.row}>
            
          </View>
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
  heading:{
    marginTop: 12,
    marginLeft: 12,
    fontSize:36,
    fontWeight: 'bold'
  },
  subheading:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 12
  },
 centerText:{
    justifyContent:'center',
    alignSelf: 'center'
  },

  row: {
    flexDirection: 'row',
    marginTop: 10,
    height: 80,
    width: '100%'
  },

  iconGift: {
    width: 28,
    height: 28,
    marginLeft: 12
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
  horizontalDivider: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
    marginTop: 32,
    marginBottom: 32,
    width: '80%',
    justifyContent:'center',
    alignSelf: 'center'
  }

});
