import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-elements";
import PopupDialog from 'react-native-popup-dialog';

export default class Kaufkomponente extends Component {
  constructor(props) {
    super(props);
  }

  showAlert() {
    Alert.alert('High Five!', 'Viel Spaß bei deinem Event! Jetzt heißt es nur noch genießen. Den Rest machen wir.',
      [{ text: 'OK', onPress: () => console.log('OK Pressed') }],
      { cancelable: false })
  }
  // TODO Bei ok zum Booked Screen

  render() {
    return (
      <ScrollView>
        <View>
          <Image source={require('../resources/detail/hackathon.jpg')} style={styles.headerImage} />
          <Text style={styles.heading}> Mein Schutz - Basic </Text>

          <View style={styles.row}>
            <Card containerStyle={{ padding: 0, width: 175, backgroundColor: 'lightgrey' }}>
              <View style={[styles.dangerContainer, {backgroundColor: 'lightgrey'}]}>
                <Image
                  style={{width: 20, height: 24}}
                  source={{ uri: 'https://s3.eu-central-1.amazonaws.com/seezy-images/shield.png'}}/>
                <Text style={{textDecorationLine: 'line-through'}}> Diebstahl </Text>
              </View>
            </Card>
            <Card containerStyle={{ padding: 0, width: 175 }}>
              <View style={styles.dangerContainer}>
                <Image
                  style={{width: 20, height: 26}}
                  source={{ uri: 'https://s3.eu-central-1.amazonaws.com/seezy-images/dollar-sign.png'}}/>
                <Text> Haftplicht </Text>
              </View>
            </Card>
          </View>

          <View style={styles.row}>
            <Card containerStyle={{ padding: 0, width: 175, backgroundColor: 'lightgrey'}}>
              <View style={[styles.dangerContainer, {backgroundColor: 'lightgrey'}]}>
                <Image
                  style={{width: 20, height: 24}}
                  source={{ uri: 'https://s3.eu-central-1.amazonaws.com/seezy-images/bell.png'}}/>
                <Text style={{textDecorationLine: 'line-through'}}> Comfort Bett </Text>
              </View>
            </Card>
            <Card containerStyle={{ padding: 0, width: 175, backgroundColor: 'lightgrey'}}>
              <View style={[styles.dangerContainer, {backgroundColor: 'lightgrey'}]}>
                <Image
                  style={{width: 20, height: 24}}
                  source={{ uri: 'https://s3.eu-central-1.amazonaws.com/seezy-images/activity.png'}}/>
                <Text style={{textDecorationLine: 'line-through'}}> Kaffee Flatrate </Text>
              </View>
            </Card>
          </View>

          <View style= {styles.horizontalDivider}/>

          <View>
            <Text style={styles.subheading}> SV Insurathon </Text>

            <View style ={styles.kurzinfo}>
              <Image 
                source={require('../resources/detail/map-pin.png')}
                style = {styles.iconPin}
              />
              <Text style={styles.eventDetailText}>SparkassenVersicherung, Stuttgart</Text>
            </View>

            <View style ={styles.kurzinfo}>
              <Image 
                source={require('../resources/detail/clock.png')}
                style = {styles.iconClock}
              />
              <Text style={styles.eventDetailText}>Sa. 23.06.2018 09:00 Uhr {"\n"}bis {"\n"}Mo. 25.06.2018 20:00 Uhr</Text>
            </View>
          </View>

          <View style= {styles.horizontalDivider}/>

          <Text style={styles.subheading}> Bezahlen </Text>

          <View style={styles.payment}>

            <TouchableOpacity>
              <Image source={require('../resources/pay/paydirekt.png')} style={styles.payOptions} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../resources/pay/mastercard.png')} style={styles.payOptions} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={require('../resources/pay/paypal.png')} style={styles.payOptions} />
            </TouchableOpacity>

          </View>

          <View>
            <Text style={styles.price}> 5,99€ </Text>
          </View>

          <View style={styles.popup}>
          <TouchableOpacity onPress={this.showAlert} style={{width: '60%', backgroundColor:'#27AE60', padding: 12, borderRadius: 3, alignItems: 'center',
    justifyContent: 'center', marginBottom: 12}}>
            <Text style={{color: 'white'}}>ABSICHERN</Text>
          </TouchableOpacity>

          </View>
        </View>
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
    marginTop: 12,
    fontSize:36,
    fontWeight: 'bold'
  },
  subheading:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12
  },
  dangerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginTop: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 80,
    width: '100%'
  },
  payment: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    height: 100,
    width: '100%'
  },
  kurzinfo: {
    flexDirection: 'row',
    marginTop: 12,
    height: 50,
    width: '100%'
  },

  iconPin:{
    marginLeft: 12,
    width:24,
    height:28
  },
  iconClock:{
    marginLeft: 12,
    width:24,
    height:24
  },

  //TODO size anpassen
  packages: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    //width:'100%',
    height: 80
  },
  eventDetailText: {
    marginLeft: 32,
    marginRight:32
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
    height: 100
  },
  textdesc: {
    fontSize: 15
  },

  popup: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
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
