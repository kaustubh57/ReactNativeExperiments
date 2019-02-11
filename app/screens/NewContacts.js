import React, { Component } from 'react';
import { View, Text } from 'react-native';

class NewContacts extends Component {
  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F5FCFF'}}
      >
        <Text>New Contacts Screen</Text>
      </View>
    );
  }
}

export default NewContacts;