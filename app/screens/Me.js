import React, { Component } from 'react';
import { ScrollView } from 'react-native';

import Header from '../components/UserDetails/Header';
import Actions from '../components/UserDetails/Actions';
import Info from '../components/UserDetails/Info';
import colors from '../config/colors';
import { me } from '../config/data';
import PrimaryButton from '../components/Buttons/PrimaryButton'

class Me extends Component {
  render() {
    return (
      <ScrollView style={{ backgroundColor: colors.background}}>
        <Header {...me} />
        <PrimaryButton
          label="Edit Profile"
          onPress={() => null}
        />
        <Actions {...me} />
        <Info {...me} />
      </ScrollView>
    );
  }
}

export default Me;