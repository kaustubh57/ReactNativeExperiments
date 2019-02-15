import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import { capitalizeFirstLetter } from "../helpers/string";
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

const ContactStackNavigator = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        title: 'Contacts',
      }
    },
    Details: {
      screen: Details,
      navigationOptions: ({navigation}) => ({
        title: `${capitalizeFirstLetter(navigation.state.params.name.first)} `+
               `${capitalizeFirstLetter(navigation.state.params.name.last)}`
      })
    }
  },
  {
    initialRouteName: "Contacts"
  }
);

const TabNavigator = createBottomTabNavigator({
  Contacts: {
    screen: ContactStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Contacts',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>
    }
  },
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      tabBarLabel: 'New Contact',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor}/>
    }
  },
});

export default createAppContainer(TabNavigator);