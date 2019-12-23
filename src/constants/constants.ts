import { Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const lightFont = 'AirbnbCerealApp-Light';
export const normalFont = 'AirbnbCerealApp-Book';
export const mediumFont = 'AirbnbCerealApp-Medium';
export const boldFont = 'AirbnbCerealApp-Bold';
export const extraBoldFont = 'AirbnbCerealApp-ExtraBold';
export const blackFont = 'AirbnbCerealApp-Black';
export const baseFontSize = 14;

export default {
  width,
  height,
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
