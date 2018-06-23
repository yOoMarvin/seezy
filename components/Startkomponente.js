import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

const data = [
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something two"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something three"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something four"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something five"
  },
  {
    imageUrl: "http://via.placeholder.com/160x160",
    title: "something six"
  }
];

export default class Startkomponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <ScrollView>
      <View style ={styles.categoryTitle}>
      <Text style ={{fontSize:25}}> Empfohlen </Text>
      <Text> Mehr </Text>
      </View>
      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (

            <Card
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 200 }}
            >
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />

      <Text style ={{fontSize:25}}> Konzerte </Text>

      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 200 }}
            >
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />

      <Text style ={{fontSize:25}}> Sport </Text>

      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 200 }}
            >
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />

      <Text style ={{fontSize:25}}> Kultur </Text>

      <FlatList
        horizontal
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <Card
              image={{ uri: rowData.imageUrl }}
              containerStyle={{ padding: 0, width: 200 }}
            >
            </Card>
          );
        }}
        keyExtractor={(item, index) => index}
      />



</ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    flexDirection:'row',
    justifyContent:'space-between'
  },

});
