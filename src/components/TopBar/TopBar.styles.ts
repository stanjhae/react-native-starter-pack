import { StyleSheet } from 'react-native';
import constants, { borderBottomWidth, mediumFont } from 'constants/constants';

const TopBarStyles = StyleSheet.create({
  container: {
    borderBottomWidth,
    flexDirection: 'row',
    width: constants.width,
  },
  titleContainer: {
    flex: 1,
    height: '100%',
    ...(constants.center as object),
  },
  title: {
    fontFamily: mediumFont,
  },
  buttonContainer: {
    width: 40,
    justifyContent: 'center',
    height: '100%',
  },
});

export default TopBarStyles;
