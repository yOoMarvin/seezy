import React, {Component} from "react";
import {
    FlatList,
    Text,
    ScrollView,
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from "react-native";

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
              <View style={styles.categoryContainer}>
                <Text style={styles.categoryTitle}>
                    Empfohlen
                </Text>
                <Text style={{color:"#EB5757", marginTop:8}}>Mehr</Text>
              </View>
              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item}) => {

                      return (
                        <TouchableOpacity 
                            style = {styles.coverContainer}
                            onPress={() => this.props.navigation.navigate('Details')}>
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
                <Text style={{color:"#EB5757", marginTop:8}}>Mehr</Text>
              </View>

              <FlatList
                  horizontal
                  data={this.state.data}
                  renderItem={({item}) => {
                      return (
                        <TouchableOpacity 
                            style = {styles.coverContainer}
                            onPress={() => console.log('puff')}>
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
                <Text style={{color:"#EB5757", marginTop:8}}>Mehr</Text>
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
                <Text style={{color:"#EB5757", marginTop:8}}>Mehr</Text>
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
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    categoryTitle: {
      fontSize: 24,
      fontWeight: 'bold'
    },
     coverImage: {
         height:160,
         width: 160,
         marginRight: 8,
         borderRadius: 3,
         resizeMode: 'cover',
         marginBottom: 32
     },
     coverContainer : {
         marginLeft: 12
     }
});
