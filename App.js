import React, { Component } from 'react';
import { Platform } from 'react-native'

import { IosNavigator, AndroidNavigator } from './app/config/router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      Platform.OS === 'ios' ? <IosNavigator/> : <AndroidNavigator/>
    );
  }
}