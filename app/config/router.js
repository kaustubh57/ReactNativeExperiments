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
      tabBarLabel: 'Contacts'
    }
  },
  NewContact: {
    screen: NewContact,
    navigationOptions: {
      tabBarLabel: 'New Contact'
    }
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBarLabel: 'Me'
    }
  },
});

export default createAppContainer(TabNavigator);