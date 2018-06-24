import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity, Alert } from "react-native";
import { Card } from "react-native-elements";
import PopupDialog from 'react-native-popup-dialog';

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



export default class Kaufkomponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
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
          <Image source={require('../resources/detail/publicviewing.jpg')} style={styles.headerImage} />
          <Text style={styles.heading}> Mein Schutz - Basic </Text>

          <View style={styles.packages}>

            <View>
              <Image source={require('../resources/detail/umbrella.png')}
                style={styles.image} />
            </View>

            <View>
              <Image source={require('../resources/detail/thief.png')}
                style={styles.image} />
            </View>

          </View>

          <View style={styles.packages}>

            <View>
              <Image source={require('../resources/detail/teeth.png')}
                style={styles.image} />
            </View>

            <View>
              <Image source={require('../resources/detail/creditcard.png')}
                style={styles.image} />
            </View>

          </View>

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />

          <Text style={styles.heading}> Public Viewing </Text>


          <View style={styles.row}>
            <Image source={require('../resources/detail/map-pin.png')}
              style={styles.icon}
            />
            <Text style={styles.textdesc}>Biergarten Schlosspark, Stuttgart</Text>
          </View>

          <View style={styles.row}>
            <Image source={require('../resources/detail/clock.png')}
              style={styles.icon}
            />
            <Text>Sa. 30.06.2018 20:00 Uhr {"\n"} bis {"\n"} Sa. 30.06.2017 23:00 Uhr</Text>
          </View>
  

          <View
            style={{
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              marginTop: 20
            }}
          />

          <Text style={styles.heading}> Bezahlen </Text>

          <View style={styles.row}>

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
            <Button
              title="Absichern"
              color='#27AE60'
              onPress={this.showAlert}

            />

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
