import React, { Component } from "react";
import { FlatList, Text, ScrollView, StyleSheet, View, Image, Button } from "react-native";
import { Card, ListItem } from "react-native-elements";

const data =[
  {
    imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/shield.png",
    text: "Diebstahl",
    style: {width: 20, height: 24}
  },
  {
    imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/bell.png",
    text: "Schlafentzug",
    style: {width: 20, height: 24}
  },
  {
    imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/dollar-sign.png",
    text: "Sachschäden",
    style: {width: 20, height: 26}
  },
  {
    imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/activity.png",
    text: "Kaffee Entzug",
    style: {width: 20, height: 24}
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
          <Image source={require('../resources/detail/hackathon.jpg')}
          style = {styles.headerImage}
          />
          <Text style={styles.heading}> SV Insurathon </Text>

          <View style ={styles.row}>
            <Image 
              source={require('../resources/detail/map-pin.png')}
              style = {styles.iconPin}
            />
            <Text style={styles.eventDetailText}>SparkassenVersicherung, Stuttgart</Text>
          </View>

          <View style ={styles.row}>
            <Image 
              source={require('../resources/detail/clock.png')}
              style = {styles.iconClock}
            />
            <Text style={styles.eventDetailText}>Sa. 23.06.2018 09:00 Uhr {"\n"}bis {"\n"}Mo. 25.06.2018 20:00 Uhr</Text>
          </View>

          <View style={styles.horizontalDivider}/> 
        </View>
        <Text style={styles.eventDetailText}> 
          Die SV SparkassenVersicherung veranstaltet gemeinsam mit der SV Informatik GmbH erstmalig einen Hackathon und gibt dir die Chance, die Zukunft der Versicherungsbranche mitzugestalten... <Text style={{color:'#EB5757'}}>Mehr anzeigen</Text>
        </Text>

        <View style= {styles.horizontalDivider}/>

        <View>
          <Text style={styles.subheading}>Zu beachten </Text>
            <FlatList
              horizontal
              data={this.state.data}
              renderItem={({ item }) => {

                return (
                  <View style={styles.dangerContainer}>
                    <Image 
                    style={item.style}
                    source={{ uri: item.imageUrl}}/>
                    <Text> {item.text} </Text>

                  </View>
                );
              }}
              keyExtractor={(item, index) => index}
            />
        </View>

        <View style={styles.horizontalDivider}/>


          <View style ={styles.packages}>
            <Card
              image={require('../resources/detail/Basic.png')}
              containerStyle={{ padding: 0, width: 150 }}>
              <Text style={{ marginTop:16, alignSelf:'center'}}>Haftpflicht </Text>
              <View style={styles.horizontalDivider}/>
              <Text style={styles.packageTextNegative}>Diebstahl </Text>
              <View style={styles.horizontalDivider}/>
              <Text style={styles.packageTextNegative}>Comfort Bett </Text>
              <View style={styles.horizontalDivider}/>
              <View style={styles.container}>
                <Text style={styles.price}> 3,99€ </Text>
              </View>
              <Button onPress={() => {this.props.navigation.navigate("Kaufen")}} title='Auswählen' color='#F2C94C' />
            </Card>

          <Card
            image={require('../resources/detail/Top.png')}
            containerStyle={{ padding: 0, width: 150 }}>
            <Text style={{ marginTop:16, alignSelf:'center'}}>Haftpflicht </Text>
            <View style={styles.horizontalDivider}/>
            <Text style={styles.packageText}>Diebstahl </Text>
            <View style={styles.horizontalDivider}/>
            <Text style={styles.packageTextNegative}>Comfort Bett </Text>
            <View style={styles.horizontalDivider}/>
            <View style={styles.container}>
              <Text style={styles.price}> 5,99€ </Text>
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
    height:200,
    width:'100%'
  },
  heading:{
    marginTop: 12,
    fontSize:36,
    fontWeight: 'bold'
  },
  subheading:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12
  },
  row: {
    flexDirection:'row',
    marginTop: 20
  },
  eventDetailText: {
    marginLeft: 32,
    marginRight:32
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
  dangerIcon: {
    height: 24,
    width: 22,
    resizeMode: 'cover'
  },
  dangerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 8,
    marginLeft: 16,
    marginTop: 16,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  packages: {
    flexDirection:'row',
    justifyContent:'space-between',
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16
  },
  packageText: {
    alignSelf: 'center'
  },
  packageTextNegative: {
    alignSelf: 'center',
    textDecorationLine: 'line-through'
  },
  container:{
    alignItems:'center',
    },
  price:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom: 16
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
