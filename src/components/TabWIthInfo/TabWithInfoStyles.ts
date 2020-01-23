import { StyleSheet } from 'react-native';
import { baseFontSize, mediumFont } from 'constants/constants';

const TabWithInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
  info: {
    fontFamily: mediumFont,
    fontSize: baseFontSize,
  },
});

export default TabWithInfoStyles;
