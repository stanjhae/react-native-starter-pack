import Haptic from 'utils/Haptic';
import i18next from 'i18next';
import { Navigation, Options } from 'react-native-navigation';

export const translate = (text: string): string => i18next.t(text);

export const invalidForm = (submitted: boolean, errors: object) => {
  if (
    submitted &&
    Object.keys(errors).length !== 0 &&
    errors.constructor === Object
  ) {
    Haptic.error();
  }
};

export const setRoot = (stackId: string, screen: string, options?: Options) => {
  Navigation.setRoot({
    root: {
      stack: {
        id: stackId,
        children: [
          {
            component: {
              options: {
                ...options,
              },
              name: screen,
            },
          },
        ],
      },
    },
  });
};
