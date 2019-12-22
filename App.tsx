import { Navigation } from 'react-native-navigation';
import registerScreens from './src/navigation/registerScreens';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './src/locales/en';
import hu from './src/locales/hu';

registerScreens();

i18next.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en,
    hu,
  },
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'AuthLoadingScreen',
      },
    },
  });
});
