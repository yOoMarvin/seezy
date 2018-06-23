import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, Button } from "react-native";
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



export default class Detailskomponente extends Component {
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
      <Image source={require('../resources/detail/publicviewing.jpg')}
      style = {styles.headerImage}
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

  </View>
  <View style={{
    marginTop: 20,
    padding: 5
  }}>
    <Text> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
    invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
    At vero eos et accusam ...</Text>
  </View>

  <View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>

<View>
<Text>Zu beachten </Text>
<FlatList
  horizontal
  data={this.state.data}
  renderItem={({ item: rowData }) => {

    return (

      <Card

      image={require('../resources/detail/Basic.png')}

        containerStyle={{ padding: 0, width: 200, height: 100 }}
      >
      </Card>
    );
  }}
  keyExtractor={(item, index) => index}
/>
</View>

<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>


<View style ={styles.packages}>

<Card
  image={require('../resources/detail/Basic.png')}
  containerStyle={{ padding: 0, width: 150 }}
>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>

<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<View style={styles.container}>
<Text style={styles.price}> 5,99€ </Text>
</View>

<Button title='Auswählen' color='#F2C94C' />

</Card>

<Card
  image={require('../resources/detail/Top.png')}
  containerStyle={{ padding: 0, width: 150 }}
>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>
<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<Text>Lorem </Text>

<View
style={{
borderBottomColor: 'black',
borderBottomWidth: 1,
marginTop: 20
}}
/>
<View style={styles.container}>
<Text style={styles.price}> 8,99€ </Text>
</View>

<Button title='Auswählen' color='#27AE60' />

</Card>
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
  },

  heading:{
    fontSize:50
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

  packages: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
container:{
  alignItems:'center',
},

price:{
  fontSize:20,
  fontWeight:'bold'
}




});
