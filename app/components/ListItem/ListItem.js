import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Image, Platform, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

import { capitalizeFirstLetter } from '../../helpers/string';
import colors from '../../config/colors';
import styles, { CHEVRON_SIZE } from './styles';

class ListItem extends Component {

  renderLeftActions = (progress, dragX, fullName) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 50, 101],
      outputRange: [-20, 0, 0, 1],
    });
    return (
      <RectButton style={styles.leftAction} onPress={this.close}>
        <Animated.Text
          style={[
            styles.actionText,
            {
              transform: [{ translateX: trans }],
            },
          ]}>
          {fullName}
        </Animated.Text>
      </RectButton>
    );
  };

  renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });
    const pressHandler = () => {
      this.close();
      alert(text);
    };
    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }]}
          onPress={pressHandler}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  renderRightActions = progress => (
    <View style={{ width: 192, flexDirection: "row" }}>
      {this.renderRightAction("More", "#C8C7CD", 192, progress)}
      {this.renderRightAction("Flag", "#ffab00", 128, progress)}
      {this.renderRightAction("More", "#dd2c00", 64, progress)}
      {this.renderRightAction("Last", "black", 0, progress)}
    </View>
  );

  updateRef = ref => {
    this._swipeableRow = ref;
  };

  close = () => {
    this._swipeableRow.close();
  };

  render() {
    const {contact, onPress} = {...this.props};
    const fullName = `${capitalizeFirstLetter(contact.name.first)} ` +
      `${capitalizeFirstLetter(contact.name.last)}`;
    const arrowForward = Platform.OS === 'ios' ? 'ios-arrow-forward' : 'md-arrow-forward';

    return (
      <Swipeable
        ref={this.updateRef}
        friction={2}
        leftThreshold={30}
        rightThreshold={40}
        renderLeftActions={(progress, dragX) => this.renderLeftActions(progress, dragX, fullName)}
        renderRightActions={this.renderRightActions}>
        <TouchableHighlight
          onPress={onPress}
          underlayColor={colors.rowUnderlay}
          style={{backgroundColor: colors.background}}
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
