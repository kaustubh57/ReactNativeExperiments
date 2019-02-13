import { StyleSheet, Dimensions } from 'react-native';

import colors from '../../config/colors'

const window = Dimensions.get('window');

export const ICON_SIZE = 25;
export default StyleSheet.create({
  image: {
    width: window.width / 2,
    height: window.width / 2,
    borderRadius: window.width / 4
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20
  },
  name: {
    fontSize: 22,
    marginTop: 10,
    color: colors.primaryText
  },

  actionContainer: {

  },
  actionRow: {

  },
  actionInfo: {

  },
  actionLabel: {

  },
  actionBody: {

  }
});