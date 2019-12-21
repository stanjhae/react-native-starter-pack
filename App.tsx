import {Navigation} from 'react-native-navigation';
import ChooseAuthScreen from './src/screens/chooseAuthScreen/chooseAuthScreen';

Navigation.registerComponent('ChooseAuthScreen', () => ChooseAuthScreen);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'ChooseAuthScreen',
      },
    },
  });
});
