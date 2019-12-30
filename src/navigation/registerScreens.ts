import { Navigation } from 'react-native-navigation';
import ChooseAuthScreen from 'screens/ChooseAuth/ChooseAuth.Screen';
import LogInScreen from 'screens/LogIn/LogIn.Screen';
import SignUpScreen from 'screens/SignUp/SignUp.Screen';
import ComponentProvider from 'components/ComponentProvider/ComponentProvider';
import AuthLoadingScreen from 'screens/AuthLoading/AuthLoading.Screen';
import ProfileScreen from 'screens/Profile/Profile.Screen';
import withRematch from 'store/withRematch';
import ForgotPasswordScreen from 'screens/ForgotPassword/ForgotPassword.Screen';

const registerScreens = () => {
  Navigation.registerComponent(
    'AuthLoadingScreen',
    () => withRematch(ComponentProvider(AuthLoadingScreen)),
    () => LogInScreen,
  );
  Navigation.registerComponent(
    'ChooseAuthScreen',
    () => withRematch(ComponentProvider(ChooseAuthScreen)),
    () => ChooseAuthScreen,
  );
  Navigation.registerComponent(
    'LogInScreen',
    () => withRematch(ComponentProvider(LogInScreen)),
    () => LogInScreen,
  );
  Navigation.registerComponent(
    'SignUpScreen',
    () => withRematch(ComponentProvider(SignUpScreen)),
    () => SignUpScreen,
  );
  Navigation.registerComponent(
    'ProfileScreen',
    () => withRematch(ComponentProvider(ProfileScreen)),
    () => ProfileScreen,
  );
  Navigation.registerComponent(
    'ForgotPasswordScreen',
    () => withRematch(ComponentProvider(ForgotPasswordScreen)),
    () => ForgotPasswordScreen,
  );
};

export default registerScreens;
