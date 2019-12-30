import { Navigation } from 'react-native-navigation';
import { mediumFont } from 'constants/constants';
import i18next from 'i18next';

export const pushScreen = (
  stackToPushTo: string,
  screenToPush: string,
  headerTitle: string,
  props?: object,
) => {
  Navigation.push(stackToPushTo, {
    component: {
      options: {
        topBar: {
          title: {
            text: i18next.t(headerTitle),
            fontSize: 15,
            fontFamily: mediumFont,
          },
        },
      },
      id: screenToPush,
      name: screenToPush,
      passProps: {
        currentStack: stackToPushTo,
        ...props,
      },
    },
  });
};

export const popScreen = (stackToPopFrom: string) => {
  Navigation.pop(stackToPopFrom);
};

export const dismissModal = (componentToDismiss: string) => {
  Navigation.dismissModal(componentToDismiss);
};

export const showModal = (
  stackName: string,
  screenName: string,
  headerTitle: string,
  props?: object,
) =>
  Navigation.showModal({
    stack: {
      id: stackName,
      children: [
        {
          component: {
            options: {
              topBar: {
                drawBehind: true,
                leftButtons: [
                  {
                    id: 'one',
                    systemItem: 'stop',
                  },
                ],
                title: {
                  text: i18next.t(headerTitle),
                  fontSize: 15,
                  fontFamily: mediumFont,
                },
              },
            },
            name: screenName,
            passProps: {
              currentStack: stackName,
              ...props,
            },
          },
        },
      ],
    },
  });
