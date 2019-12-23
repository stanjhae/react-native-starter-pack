import { Navigation } from 'react-native-navigation';

export const pushScreen = (
  stackToPushTo: string,
  screenToPush: string,
  props?: object,
) => {
  Navigation.push(stackToPushTo, {
    component: {
      options: {
        topBar: {
          title: {
            component: {
              name: 'LogInScreen',
            },
          },
          drawBehind: true,
          background: {
            translucent: true,
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

export const showModal = (
  stackName: string,
  screenName: string,
  props?: object,
) =>
  Navigation.showModal({
    stack: {
      id: stackName,
      children: [
        {
          component: {
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
