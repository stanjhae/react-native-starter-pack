import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation/registerScreens';
import './initializeI18next';

registerScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'AuthLoadingScreen',
      },
    },
  });
});
