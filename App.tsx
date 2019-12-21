import { Navigation } from 'react-native-navigation';
import RegisterScreens from './src/navigation/registerScreens';

RegisterScreens();

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ChooseAuthStack',
        children: [
          {
            component: {
              name: 'LogInScreen',
            },
          },
          {
            component: {
              name: 'SignUpScreen',
            },
          },
          {
            component: {
              name: 'ChooseAuthScreen',
            },
          },
        ],
      },
    },
  });
});
