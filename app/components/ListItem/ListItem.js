import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { capitalizeFirstLetter } from "../../helpers/string";
import colors from '../../config/colors';
import styles, { CHEVRON_SIZE } from './styles';

const ListItem = ({contact, onPress}) => {

  const fullName = `${capitalizeFirstLetter(contact.name.first)} `+
                   `${capitalizeFirstLetter(contact.name.last)}`;
  const arrowForward = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

  return (
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
  );
};

export default ListItem;
