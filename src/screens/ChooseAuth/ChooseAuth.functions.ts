import { pushScreen } from 'navigation/navigation.actions';

export const onPressLogin = () => {
  pushScreen('ChooseAuthStack', 'LogInScreen', 'general.logIn');
};

export const onPressSignUp = () => {
  pushScreen('ChooseAuthStack', 'SignUpScreen', 'general.signUp');
};
