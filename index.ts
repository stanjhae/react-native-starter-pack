import { Navigation, OptionsTopBar } from 'react-native-navigation';
import registerScreens from 'navigation/registerScreens';
import './initializeI18next';
import { bottomTabConfig, layoutColors, mainAppColor } from 'constants/colors';
import { eventEmitter, initialMode } from 'react-native-dark-mode';
import { baseFontSize, mediumFont, normalFont } from 'constants/constants';
import { setRoot } from 'utils/utils.functions';
import { dismissModal } from 'navigation/navigation.actions';

// TODO: make code in this file more efficient

const defaultTopBarOptions: OptionsTopBar = {
  title: {
    fontFamily: mediumFont,
    fontSize: baseFontSize,
  },
};

Navigation.events().registerNavigationButtonPressedListener(({ buttonId }) => {
  switch (buttonId) {
    case 'ForgotPasswordScreen': {
      dismissModal('ForgotPasswordStack');
    }
  }
});

eventEmitter.on('currentModeChanged', newMode => {
  Navigation.mergeOptions('bottomTabs', {
    bottomTabs: {
      backgroundColor: bottomTabConfig[newMode].backgroundColor,
    },
  });

  Navigation.mergeOptions('HomeStack', {
    bottomTab: {
      iconColor: bottomTabConfig[newMode].color,
      textColor: bottomTabConfig[newMode].color,
      fontSize: 12,
      selectedIconColor: mainAppColor,
      selectedTextColor: mainAppColor,
      fontFamily: normalFont,
    },
  });

  Navigation.mergeOptions('VendorsStack', {
    bottomTab: {
      iconColor: bottomTabConfig[newMode].color,
      textColor: bottomTabConfig[newMode].color,
      fontSize: 12,
      selectedIconColor: mainAppColor,
      selectedTextColor: mainAppColor,
      fontFamily: normalFont,
    },
  });

  Navigation.mergeOptions('ProfileStack', {
    bottomTab: {
      iconColor: bottomTabConfig[newMode].color,
      textColor: bottomTabConfig[newMode].color,
      fontSize: 12,
      selectedIconColor: mainAppColor,
      selectedTextColor: mainAppColor,
      fontFamily: normalFont,
    },
  });

  Navigation.setDefaultOptions({
    layout: {
      backgroundColor: layoutColors[newMode],
    },
    topBar: {
      ...defaultTopBarOptions,
    },
  });
});

registerScreens();

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setDefaultOptions({
    bottomTabs: {
      backgroundColor: bottomTabConfig[initialMode].backgroundColor,
    },
    bottomTab: {
      iconColor: bottomTabConfig[initialMode].color,
      selectedIconColor: mainAppColor,
      fontSize: 12,
      selectedTextColor: mainAppColor,
      fontFamily: normalFont,
      textColor: bottomTabConfig[initialMode].color,
    },
    layout: {
      backgroundColor: layoutColors[initialMode],
    },
    topBar: {
      ...defaultTopBarOptions,
    },
  });
  setRoot('AuthLoadingStack', 'AuthLoadingScreen', {
    topBar: { visible: false },
  });
});