import { Navigation } from 'react-native-navigation';
import ChooseAuthScreen from '../screens/ChooseAuth/ChooseAuth.Screen';
import LogInScreen from '../screens/LogIn/LogIn.Screen';
import SigUpScreen from '../screens/SignUp/SignUp.Screen';
import ComponentProvider from '../components/ComponentProvider/ComponentProvider';
import AuthLoadingScreen from '../screens/AuthLoading/AuthLoadingScreen';

const registerScreens = () => {
  Navigation.registerComponent(
    'AuthLoadingScreen',
    () => ComponentProvider(AuthLoadingScreen),
    () => LogInScreen,
  );
  Navigation.registerComponent(
    'ChooseAuthScreen',
    () => ComponentProvider(ChooseAuthScreen),
    () => ChooseAuthScreen,
  );
  Navigation.registerComponent(
    'LogInScreen',
    () => ComponentProvider(LogInScreen),
    () => LogInScreen,
  );
  Navigation.registerComponent(
    'SignUpScreen',
    () => ComponentProvider(SigUpScreen),
    () => LogInScreen,
  );
};

export default registerScreens;
