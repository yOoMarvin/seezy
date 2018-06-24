import React, {Component} from "react";
import {
    FlatList,
    Text,
    ScrollView,
    StyleSheet,
    View,
    Button
} from "react-native";
import {Card, SearchBar} from "react-native-elements";

const data = [
    {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something"
    }, {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something two"
    }, {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something three"
    }, {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something four"
    }, {
        imageUrl: "http://via.placeholder.com/160x160",
        title: "something five"
    }, {
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
              <SearchBar
              lightTheme
              placeholder = 'Suche...'
              containerStyle = {styles.searchContainer}
              inputStyle = {styles.searchInput} />
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>
                    Empfohlen
                </Text>
                <Button
                  title= "Mehr"
                  color= "#EB5757"/>
              </View>
              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item: rowData}) => {

                      return (

                          <Card
                              image={{
                                  uri: rowData.imageUrl
                              }}
                              containerStyle={{
                                  padding: 0,
                                  width: 200
                              }}></Card>
                      );
                  }}
                  keyExtractor={(item, index) => index}/>


              <View style={styles.categoryContainer}>
                <Text style ={styles.categoryTitle}>
                    Konzerte
                </Text>
                <Button
                  title= "Mehr"
                  color= "#EB5757"/>
              </View>

              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item: rowData}) => {
                      return (
                          <Card
                              image={{ uri: rowData.imageUrl }}
                              containerStyle={{ padding: 0, width: 200 }}></Card>
                      );
                  }}
                  keyExtractor={(item, index) => index}/>

              <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>
                    Sport
                </Text>
                <Button
                  title= "Mehr"
                  color= "#EB5757"/>
              </View>

              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item: rowData}) => {
                      return (
                          <Card
                              image={{ uri: rowData.imageUrl}}
                              containerStyle={{ padding: 0,width: 200 }}></Card>
                      );
                  }}
                  keyExtractor={(item, index) => index}/>

              <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>
                    Kultur
                </Text>
                <Button
                  title= "Mehr"
                  color= "#EB5757"/>
              </View>
              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item: rowData}) => {
                      return (
                          <Card
                              image={{ uri: rowData.imageUrl }}
                              containerStyle={{ padding: 0, width: 200 }}></Card>
                      );
                  }}
                  keyExtractor={(item, index) => index}/>

            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    categoryContainer: {
        marginLeft: 12,
        marginRight: 12,
        marginTop: 32,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
    searchContainer: {
      backgroundColor: 'white',
      borderWidth: 0, //no effect
      shadowColor: 'white', //no effect
      borderBottomColor: 'transparent',
      borderTopColor: 'transparent'
     },
     searchInput: {
       backgroundColor: 'lightgrey'
     }
});
