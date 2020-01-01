import { Dimensions } from 'react-native';
import Platform from 'utils/Platform';

export const { width, height } = Dimensions.get('window');
export const lightFont = 'AirbnbCerealApp-Light';
export const normalFont = 'AirbnbCerealApp-Book';
export const mediumFont = 'AirbnbCerealApp-Medium';
export const boldFont = 'AirbnbCerealApp-Bold';
export const extraBoldFont = 'AirbnbCerealApp-ExtraBold';
export const blackFont = 'AirbnbCerealApp-Black';
export const zapfino = 'ZapfinoExtraLT-One';
export const baseFontSize = 14;
export const tabBarScale = 2.3;
export const borderBottomWidth = Platform.isIOS13() ? 0.2 : 0.3;

export default {
  width,
  height,
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
