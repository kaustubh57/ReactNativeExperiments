import React, { Component } from 'react';
import { FlatList, View } from 'react-native';

import { contacts } from "../config/data";
import colors from '../config/colors';
import ListItem from "../components/ListItem/ListItem";

class Contacts extends Component {

  handleRowPress = contact => {
    this.props.navigation.navigate('Details', contact);
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