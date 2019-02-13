import React, { Component } from 'react';
import AppNavigator from './app/config/router';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppNavigator/>
    );
  }
}