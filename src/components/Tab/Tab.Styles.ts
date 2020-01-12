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
    paddingVertical: 17,
    borderBottomWidth,
  },
  tabName: {
    fontFamily: mediumFont,
    fontSize: baseFontSize,
  },
  tabNameContainer: {
    flex: 1,
  },
});

export default TabStyles;
