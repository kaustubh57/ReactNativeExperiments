import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import { contacts } from "../config/data";
import colors from '../config/colors';
import ListItem from "../components/ListItem/ListItem";

class Contacts extends Component {

  handleRowPress = contact => {

  };

  render() {
    return (
      <FlatList
        style={{backgroundColor: colors.background}}
        data={contacts}
        keyExtractor={(item) => item.email}
        renderItem={({item}) =>
          <View>
            <ListItem
              contact={item}
              onPress={()=>this.handleRowPress(item)}
            />
           </View>
        }
      />
    );
  }
}

export default Contacts;