import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

export const CHEVRON_SIZE = 25;
export default StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 8
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10
  },
  nameContainer: {
    flexGrow: 1
  },
  name: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.primaryText
  },
  email: {
    fontSize: 13,
    color: colors.subtleText
  },
  separator: {},
  chevronContainer: {
    justifyContent: 'flex-end'
  },
  chevron: {
    alignSelf: 'flex-end'
  },

  leftAction: {
    flex: 1,
    backgroundColor: '#497AFC',
    justifyContent: 'center'
  },
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  }
});