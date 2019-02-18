import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Platform } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/Ionicons';

import { capitalizeFirstLetter } from "../../helpers/string";
import colors from '../../config/colors';
import styles, { CHEVRON_SIZE } from './styles';

class ListItem extends Component {

  render() {
    const {contact, onPress} = {...this.props};
    const fullName = `${capitalizeFirstLetter(contact.name.first)} ` +
      `${capitalizeFirstLetter(contact.name.last)}`;
    const arrowForward = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

    return (
      <Swipeable>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={colors.rowUnderlay}
        >
          <View style={styles.row}>
            <Image
              source={{uri: contact.picture.thumbnail}}
              style={styles.avatar}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{fullName}</Text>
              <Text style={styles.email}>{contact.email}</Text>
            </View>
            <View style={styles.chevronContainer}>
              <Icon
                name={arrowForward}
                size={CHEVRON_SIZE}
                color={colors.subtleText}
                style={styles.chevron}
              />
            </View>
          </View>
        </TouchableHighlight>
      </Swipeable>
    );
  }
};

export default ListItem;
