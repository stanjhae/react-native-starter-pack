import { pushScreen } from 'navigation/navigation.actions';

export const onPressLogin = () => {
  pushScreen('ChooseAuthStack', 'AuthScreen', 'general.logIn', {
    type: 'logIn',
  });
};

export const onPressSignUp = () => {
  pushScreen('ChooseAuthStack', 'AuthScreen', 'general.signUp', {
    type: 'signUp',
  });
};
