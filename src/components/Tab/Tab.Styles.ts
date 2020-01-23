import { StyleSheet } from 'react-native';
import {
  baseFontSize,
  borderBottomWidth,
  mediumFont,
} from 'constants/constants';

const TabStyles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    height: 53,
    borderBottomWidth,
  },
  tabName: {
    fontFamily: mediumFont,
    fontSize: baseFontSize,
  },
  tabNameContainer: {
    marginRight: 20,
  },
});

export default TabStyles;
