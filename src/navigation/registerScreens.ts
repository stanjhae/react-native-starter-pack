import { Navigation } from 'react-native-navigation';
import ChooseAuthScreen from '../screens/ChooseAuth/ChooseAuthScreen';
import LogInScreen from '../screens/LogIn/LogIn.Screen';
import SigUpScreen from '../screens/Signup/Signup.Screen';

const RegisterScreens = () => {
  Navigation.registerComponent('ChooseAuthScreen', () => ChooseAuthScreen);
  Navigation.registerComponent('LogInScreen', () => LogInScreen);
  Navigation.registerComponent('SignUpScreen', () => SigUpScreen);
};

export default RegisterScreens;
