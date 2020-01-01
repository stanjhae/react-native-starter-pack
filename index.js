import { Navigation } from 'react-native-navigation';
import registerScreens from 'navigation/registerScreens';
import './initializeI18next';
import { bottomTabConfig, layoutColors, mainAppColor } from 'constants/colors';
import { eventEmitter, initialMode } from 'react-native-dark-mode';
import { normalFont } from 'constants/constants';
import { setRoot } from 'utils/utils.functions';

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
      visible: false,
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
      visible: false,
    },
  });
  setRoot('AuthLoadingStack', 'AuthLoadingScreen');
});
