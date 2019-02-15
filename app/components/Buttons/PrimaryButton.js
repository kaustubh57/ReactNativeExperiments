import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const PrimaryButton = ({ label, onPress }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => onPress()}
      >
        <Text>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PrimaryButton;