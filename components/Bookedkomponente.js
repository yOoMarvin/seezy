import React, { Component } from "react";
import {  Text, ScrollView, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";
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

  render() {
    return (
      <ScrollView>
        <View>
          <Text style={styles.heading}>Meine Events</Text>
          <Text style={styles.subheading}>Aktuell</Text>
        </View>

        <Card
          image={require('../resources/Insurathon-Booked.png')}
          containerStyle={{ width: '95%' }}
          imageStyle={{ height: 180}}>
          <Text style={[styles.subheading, styles.centerText]}>SV Insurathon</Text>
          <View style={styles.horizontalDivider}/>
          <Text style={styles.centerText}>Am Löwentor {"\n"}</Text>
          <Text style={styles.centerText}> Vom 23.06.208 bis 25.06.2018 </Text>
          <View style={styles.horizontalDivider}/>
          <Text style={styles.centerText}>Mein Schutz: Basic </Text>
          <View style={styles.horizontalDivider}/>
          <View style={[styles.row, styles.centerText]}>
            <Image 
              source={require('../resources/gift.png')}
              style = {styles.iconGift}
            />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Freebie')} containerStyle={{ padding: 0}}>
              <Text style={{color: '#EB5757', marginLeft: 12 }}>Freigetränk sichern</Text>
            </TouchableOpacity>
          </View>
        </Card>

        <View style={styles.horizontalDivider}/>

        <Text style={styles.subheading}>Beendet</Text>

        <Image source={require('../resources/publicviewing-booked.png')}  style={{height: 180, width: '95%', marginLeft: 12, marginRight: 12, marginBottom: 12}}/>

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

  packages: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    marginTop: 24,
    marginBottom: 24,
    width: '80%',
    justifyContent:'center',
    alignSelf: 'center'
  }

});
