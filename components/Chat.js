'use strict'

import React, { Component } from "react";
import { View,Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

const list = [
    {
        name: 'SV Insurathon Finale 2018',
        avatar_url: 'https://s3.eu-central-1.amazonaws.com/seezy-images/insurathon-chat.png',
        subtitle: 'SV Stuttgart, 25.06.2018'
    }, {
        name: 'Holi Festival',
        avatar_url: 'https://s3.eu-central-1.amazonaws.com/seezy-images/holi-chat.png',
        subtitle: 'Porsche Arena Stuttgart, 04.06.2018'
    }, {
        name: 'Public Viewing',
        avatar_url: 'https://s3.eu-central-1.amazonaws.com/seezy-images/pubview-chat.png',
        subtitle: 'Mercedes Benz Arena Stuttgart, 26.06.2018'
    }
]

export default class Chat extends Component {
    render() {
        return (
            <View>
                <Text style={styles.heading}> Chat </Text>
                <List containerStyle= {{ marginBottom: 20 }}>
                    {
                        list.map((l, i) => (
                            <ListItem
                                roundAvatar
                                avatar={{ uri: l.avatar_url }}
                                key={i}
                                title={l.name}
                                subtitle={l.subtitle}/>
                        ))
                    }
                </List>
                <View style = {styles.textContainer}>
                    <Text style = {styles.subtext} >keine weiteren Chats für Events verfügbar.</Text>
                    <Text style = {styles.subtext} >Schau dich um und schütze dich vor typischen Event-Gefahren </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textContainer: {
        marginTop: 128,
        alignItems: 'center',
        justifyContent: 'center',
    }, 
    subtext: {
        textAlign: 'center',
        fontWeight: 'bold'
    },
    heading:{
        marginTop: 12,
        marginLeft: 12,
        fontSize:36,
        fontWeight: 'bold'
    },
});