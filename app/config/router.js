import React from 'react';
import { Button } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import { capitalizeFirstLetter } from "../helpers/string";
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

export const ContactStackNavigator = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: ({ navigation }) => ({
        title: "Contacts",
        headerLeft: <Button title="Open" onPress={() => navigation.openDrawer()}/>
      })
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

export const NewContactStack = createStackNavigator(
  {
    NewContact: {
      screen: NewContact,
      navigationOptions: ({ navigation }) => ({
        title: "New Contact",
        headerLeft: <Button title="Open" onPress={() => navigation.openDrawer()}/>
      })
    }
  }
);

export const MeStack = createStackNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: ({ navigation }) => ({
        title: "me",
        headerLeft: <Button title="Open" onPress={() => navigation.openDrawer()}/>
      })
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    Contacts: {
      screen: ContactStackNavigator,
      navigationOptions: {
        tabBarLabel: "Contacts",
        tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor}/>
      }
    },
    NewContact: {
      screen: NewContactStack,
      navigationOptions: {
        tabBarLabel: "New Contact",
        tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor}/>
      }
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        tabBarLabel: "Me",
        tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor}/>
      }
    }
  },
  {
    initialRouteName: "Contacts",
    order: ["Contacts", "NewContact", "Me"]
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    Contacts: {
      screen: ContactStackNavigator,
      navigationOptions: {
        drawerLabel: "New Contact",
        drawerIcon: ({ tintColor }) => <Icon name="ios-list" size={25} color={tintColor}/>
      }

    },
    NewContact: {
      screen: NewContactStack,
      navigationOptions: {
        drawerLabel: "New Contact",
        drawerIcon: ({ tintColor }) => <Icon name="ios-add" size={25} color={tintColor}/>
      }
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        drawerLabel: "Me",
        drawerIcon: ({ tintColor }) => <Icon name="ios-contact" size={25} color={tintColor}/>
      }
    }
  },
  {
    initialRouteName: "Contacts",
    order: ["Contacts", "NewContact", "Me"]
  }
);

export default createAppContainer(DrawerNavigator);