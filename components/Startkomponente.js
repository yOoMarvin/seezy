import React, {Component} from "react";
import {
    FlatList,
    Text,
    ScrollView,
    StyleSheet,
    View,
    Button,
    TouchableOpacity,
    Image
} from "react-native";
import {Card, SearchBar} from "react-native-elements";

const data = [
    {
        imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/InsurathonCover.png",
    }, {
        imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/PublicCover.png",
    }, {
        imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/HoliCover.png",
    }, {
        imageUrl: "https://s3.eu-central-1.amazonaws.com/seezy-images/ConcertCover.png",
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
                  renderItem={({item}) => {

                      return (
                        <TouchableOpacity style = {styles.coverContainer}>
                        <Image
                          style={styles.coverImage}
                          source={{ uri: item.imageUrl }}
                        />
                        </TouchableOpacity>
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
                  renderItem={({item}) => {
                      return (
                        <TouchableOpacity style = {styles.coverContainer}>
                        <Image
                          style={styles.coverImage}
                          source={{ uri: item.imageUrl }}
                        />
                        </TouchableOpacity>
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
                  renderItem={({item}) => {
                      return (
                        <TouchableOpacity style = {styles.coverContainer}>
                        <Image
                          style={styles.coverImage}
                          source={{ uri: item.imageUrl }}
                        />
                        </TouchableOpacity>
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
                  renderItem={({item}) => {
                      return (
                        <TouchableOpacity style = {styles.coverContainer}>
                        <Image
                          style={styles.coverImage}
                          source={{ uri: item.imageUrl }}
                        />
                        </TouchableOpacity>
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
     },
     coverImage: {
         height:160,
         width: 160,
         marginRight: 8,
         borderRadius: 3,
         resizeMode: 'cover'
     },
     coverContainer : {
         marginLeft: 12
     }
});
