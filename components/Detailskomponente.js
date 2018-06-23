import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View } from "react-native";
import { Card } from "react-native-elements";

export default class Detailskomponente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return(
      <Image source={{uri:'http://via.placeholder.com/160x160'}}/>

      
    );

  }
}

const styles = StyleSheet.create({
  categoryTitle: {
    flexDirection:'row',
    justifyContent:'space-between'
  },


});
