import { Navigation } from 'react-native-navigation';
import { mediumFont } from 'constants/constants';
import i18next from 'i18next';
import { Platform } from 'react-native';

export const showForgotPasswordModal = (props?: object) =>
  Navigation.showModal({
    stack: {
      id: 'ForgotPasswordModal',
      children: [
        {
          component: {
            id: 'ForgotPasswordScreen',
            options: {
              topBar: {
                leftButtons: [
                  {
                    icon:
                      Platform.OS === 'android'
                        ? require('../../../assets/black_back.png')
                        : undefined,
                    id: 'forgotPasswordCancel',
                    systemItem: 'stop',
                  },
                ],
                title: {
                  text: i18next.t('general.forgotPassword'),
                  fontSize: 15,
                  fontFamily: mediumFont,
                },
              },
            },
            name: 'ForgotPasswordScreen',
            passProps: {
              currentStack: 'ForgotPasswordStack',
              ...props,
            },
          },
        },
      ],
    },
  });
