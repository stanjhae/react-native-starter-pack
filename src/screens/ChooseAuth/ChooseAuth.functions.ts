import { pushScreen } from 'navigation/navigation.actions';

export const onPressChooseAuthButton = (type: string): void => {
  pushScreen('ChooseAuthStack', 'AuthScreen', `general.${type}`, {
    type,
  });
};
