import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

import { contacts } from "../config/data";

class Contacts extends Component {
  render() {
    return (
      <FlatList
        style={{ backgroundColor: styles.container.backgroundColor }}
        data={contacts}
        keyExtractor={(item) => item.email}
        renderItem={({item}) =>
          <View><Text>{item.email}</Text></View>
        }
      />
    );
  }
}

export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
