import { Navigation } from 'react-native-navigation';

export const showForgotPasswordModal = (props?: object) =>
  Navigation.showModal({
    stack: {
      id: 'ForgotPasswordModal',
      children: [
        {
          component: {
            id: 'ForgotPasswordScreen',
            name: 'ForgotPasswordScreen',
            passProps: {
              currentStack: 'ForgotPasswordModal',
              ...props,
            },
          },
        },
      ],
    },
  });
