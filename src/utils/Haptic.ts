import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const error = () => {
  ReactNativeHapticFeedback.trigger('notificationError', options);
};

const success = () => {
  ReactNativeHapticFeedback.trigger('notificationSuccess', options);
};

export default {
  error,
  success,
};
