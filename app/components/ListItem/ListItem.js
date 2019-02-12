import React from 'react';
import {View, Text, StyleSheet, TouchableHighlight, Image, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { capitalizeFirstLetter } from "../../helpers/string";
import colors from '../../config/colors';
import styles, { CHEVRON_SIZE } from './styles';

const ListItem = ({contact, onPress}) => {

  const fullName = `${capitalizeFirstLetter(contact.name.first)} `+
                   `${capitalizeFirstLetter(contact.name.last)}`;

  return (
    <TouchableHighlight
      onPress={onPress}
    >
      <View style={styles.row}>
        <Image
          source={{uri: contact.picture.thumbnail}}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.name}>{fullName}</Text>
          <Text style={styles.email}>{contact.email}</Text>
        </View>

      </View>
    </TouchableHighlight>
  );
};

export default ListItem;
