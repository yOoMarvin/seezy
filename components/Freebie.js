/*jshint esversion: 6  */
(function () {'use strict';}());

import React, { Component } from "react";
import { View,Text, Image } from 'react-native';

export default class Bookedkomponente extends Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
          <View styles={{justifyContent:'center', alignSelf: 'center'}}>
            <Text style={{marginTop: 24, marginLeft: 12, fontSize:28, fontWeight: 'bold', justifyContent:'center', alignSelf: 'center'}}>Ein Freigetränk nur für dich</Text>
            <Image source={require('../resources/freebie-qrcode.png')} style={{height: 200, width: 200, marginTop: 28, justifyContent:'center', alignSelf: 'center'}}/>
          </View>
      );
    }
  }