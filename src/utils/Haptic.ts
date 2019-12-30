import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

const error = () => {
  ReactNativeHapticFeedback.trigger('notificationError', options);
};

const impactMedium = () => {
  ReactNativeHapticFeedback.trigger('impactMedium', options);
};

const impactHeavy = () => {
  ReactNativeHapticFeedback.trigger('impactHeavy', options);
};

const success = () => {
  ReactNativeHapticFeedback.trigger('notificationSuccess', options);
};

export default {
  impactHeavy,
  impactMedium,
  error,
  success,
};
