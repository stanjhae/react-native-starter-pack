import { Navigation } from 'react-native-navigation';

export const pushScreen = (
  stackToPushTo: string,
  screenToPush: string,
  props?: object,
) => {
  Navigation.push(stackToPushTo, {
    component: {
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
