import { Navigation } from 'react-native-navigation';
import { translate } from 'utils/utils.functions';

export const showForgotPasswordModal = (props?: object) =>
  Navigation.showModal({
    stack: {
      id: 'ForgotPasswordModal',
      children: [
        {
          component: {
            options: {
              topBar: {
                title: {
                  text: translate('general.forgotPassword'),
                },
              },
            },
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
