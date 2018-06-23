import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image } from "react-native";
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
]



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
        image={{ uri: rowData.imageUrl }}
        containerStyle={{ padding: 0, width: 200, height: 100 }}
      >
      </Card>
    );
  }}
  keyExtractor={(item, index) => index}
/>
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
  }



});
