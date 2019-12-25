import { Navigation } from 'react-native-navigation';
import registerScreens from 'navigation/registerScreens';
import './initializeI18next';
import { mainAppColor } from 'constants/colors';
import { Platform } from 'react-native';
import { eventEmitter, initialMode } from 'react-native-dark-mode';

const layoutColors = {
  light: 'white',
  dark: 'black',
};

eventEmitter.on('currentModeChanged', newMode => {
  Navigation.setDefaultOptions({
    topBar: {
      backButton: {
        color: Platform.OS === 'ios' ? mainAppColor : undefined,
      },
    },
    layout: {
      backgroundColor: layoutColors[newMode],
    },
  });
});

registerScreens();

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
  switch (buttonId) {
    case 'forgotPasswordCancel': {
      Navigation.dismissModal('ForgotPasswordModal');
      break;
    }
  }
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: layoutColors[initialMode],
    },
    topBar: {
      backButton: {
        color: Platform.OS === 'ios' ? mainAppColor : undefined,
      },
    },
  });
  Navigation.setRoot({
    root: {
      component: {
        name: 'AuthLoadingScreen',
      },
    },
  });
});
