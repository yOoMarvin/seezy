import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, Button, TouchableOpacity } from "react-native";
import { Card } from "react-native-elements";

const data =[
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

  render() {
    return(
      <ScrollView>

      <View>
        <Image source={require('../resources/detail/publicviewing.jpg')} style={styles.headerImage}/>
        <Text style={styles.heading}> Mein Schutz - Basic </Text>

        <View style ={styles.packages}>

          <View>
          <Image source={require('../resources/detail/umbrella.png')}
          style={styles.image}/>
          </View>

            <View>
              <Image source={require('../resources/detail/thief.png')}
              style={styles.image}/>
        </View>

      </View>

      <View style ={styles.packages}>

        <View>
        <Image source={require('../resources/detail/tooth.png')}
        style={styles.image}/>
        </View>

        <View>
        <Image source={require('../resources/detail/credit-card.png')}
        style={styles.image}/>
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


  <View style ={styles.row}>
  <Image source={require('../resources/detail/mappin.png')}
  style = {styles.icon}
  />
  <Text>Biergarten Schlosspark, Stuttgart</Text>
  </View>

  <View style ={styles.row}>
  <Image source={require('../resources/detail/clock.png')}
  style = {styles.icon}
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

<View style ={styles.row}>

<TouchableOpacity>
<Image source={require('../resources/pay/paydirekt.png')} style={styles.payOptions}/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../resources/pay/mastercard.png')} style={styles.payOptions}/>
</TouchableOpacity>
<TouchableOpacity>
<Image source={require('../resources/pay/paypal.png')} style={styles.payOptions}/>
</TouchableOpacity>

</View>

<View style={styles.container}>
<Text style={styles.price}> 5,99€ </Text>
</View>

<Button title='Absichern' color='#27AE60' />

      </View>
      </ScrollView>
    );

  }
}

const styles = StyleSheet.create({
  headerImage: {
    flex:1,
    alignSelf:'stretch',
    height:150,
    width:'100%'
  },

  heading:{
    fontSize:30
  },

  row: {
    flexDirection:'row',
    justifyContent:'space-around',
    marginTop: 20
  },

  icon:{
    width:35,
    height:40
  },

//TODO size anpassen
  packages: {
    flexDirection:'row',
    justifyContent:'space-around',
    width:100,
    height:50
  },
  container:{
    alignItems:'center',
  },

  price:{
    fontSize:20,
    fontWeight:'bold'
  },

  image:{
    height:20,
    width:20

  },

  payOptions:{
    width:150,
    height:100
  }




});
