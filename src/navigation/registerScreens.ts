import { Navigation } from 'react-native-navigation';
import ChooseAuthScreen from 'screens/ChooseAuth/ChooseAuth.Screen';
import ComponentProvider from 'components/ComponentProvider/ComponentProvider';
import AuthLoadingScreen from 'screens/AuthLoading/AuthLoading.Screen';
import ProfileScreen from 'screens/Profile/Profile.Screen';
import withRematch from 'store/withRematch';
import ForgotPasswordScreen from 'screens/ForgotPassword/ForgotPassword.Screen';
import VendorsScreen from 'screens/Vendors/Vendors.Screen';
import HomeScreen from 'screens/Home/Home.Screen';
import MoreScreen from 'screens/More/More.Screen';
import AuthScreen from 'screens/Auth/Auth.Screen';

const registerScreens = () => {
  Navigation.registerComponent(
    'AuthLoadingScreen',
    () => withRematch(ComponentProvider(AuthLoadingScreen)),
    () => AuthLoadingScreen,
  );
  Navigation.registerComponent(
    'ChooseAuthScreen',
    () => withRematch(ComponentProvider(ChooseAuthScreen)),
    () => ChooseAuthScreen,
  );
  Navigation.registerComponent(
    'AuthScreen',
    () => withRematch(ComponentProvider(AuthScreen)),
    () => AuthScreen,
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
  Navigation.registerComponent(
    'HomeScreen',
    () => ComponentProvider(HomeScreen),
    () => HomeScreen,
  );
  Navigation.registerComponent(
    'VendorsScreen',
    () => ComponentProvider(VendorsScreen),
    () => VendorsScreen,
  );
  Navigation.registerComponent(
    'MoreScreen',
    () => ComponentProvider(MoreScreen),
    () => MoreScreen,
  );
};

export default registerScreens;
