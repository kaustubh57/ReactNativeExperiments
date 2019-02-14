import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Header from '../components/UserDetails/Header'
import colors from '../config/colors';
import Actions from '../components/UserDetails/Actions';
import Info from "../components/UserDetails/Info";

class Details extends Component {
  render() {
    const contact = this.props.navigation.state.params;

    return (
      <ScrollView style={{backgroundColor: colors.background}}>
        <Header {...contact} />
        <Actions {...contact} />
        <Info {...contact} />
      </ScrollView>
    );
  }
}

export default Details;