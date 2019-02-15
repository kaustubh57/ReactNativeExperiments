import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createDrawerNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import NewContact from '../screens/NewContact';
import Me from '../screens/Me';

import { capitalizeFirstLetter } from "../helpers/string";
import DrawerButton from '../components/Header/DrawerButton'

const LeftDrawerButton = ({ navigation }) => {
  if (Platform.OS === 'android') {
    return <DrawerButton onPress={() => navigation.openDrawer()}/>;
  }

  return null;
};

export const ContactStackNavigator = createStackNavigator(
  {
    Contacts: {
      screen: Contacts,
      navigationOptions: (props) => ({
        title: "Contacts",
        headerLeft: <LeftDrawerButton {...props} />
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
      navigationOptions: (props) => ({
        title: "New Contact",
        headerLeft: <LeftDrawerButton {...props} />
      })
    }
  }
);

export const MeStack = createStackNavigator(
  {
    Me: {
      screen: Me,
      navigationOptions: (props) => ({
        title: "Me",
        headerLeft: <LeftDrawerButton {...props} />
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
        drawerIcon: ({ tintColor }) => <Icon name="ios-list" size={22} color={tintColor}/>
      }

    },
    NewContact: {
      screen: NewContactStack,
      navigationOptions: {
        drawerLabel: "New Contact",
        drawerIcon: ({ tintColor }) => <Icon name="ios-add" size={22} color={tintColor}/>
      }
    },
    Me: {
      screen: MeStack,
      navigationOptions: {
        drawerLabel: "Me",
        drawerIcon: ({ tintColor }) => <Icon name="ios-contact" size={22} color={tintColor}/>
      }
    }
  },
  {
    initialRouteName: "Contacts",
    order: ["Contacts", "NewContact", "Me"]
  }
);

export const IosNavigator = createAppContainer(TabNavigator);
export const AndroidNavigator = createAppContainer(DrawerNavigator);