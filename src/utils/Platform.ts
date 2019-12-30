import { Platform } from 'react-native';

const isIOS13 = () => Platform.Version > 13.0;
const isIOS = () => Platform.OS === 'ios';

export default {
  isIOS13,
  isIOS,
};
