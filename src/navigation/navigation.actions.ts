import { Navigation } from 'react-native-navigation';
import { mediumFont } from 'constants/constants';
import { translate } from 'utils/utils.functions';

export const popScreen = (stackToPopFrom: string) => {
  Navigation.pop(stackToPopFrom);
};

export const dismissModal = (componentToDismiss: string) => {
  Navigation.dismissModal(componentToDismiss);
};

// TODO: Translucent header working with Navigation.showModal but not for Navigation.push
export const pushScreen = (
  stackToPushTo: string,
  screenToPush: string,
  headerTitle: string,
  props?: object,
  pushOverBottomTabs?: boolean,
) => {
  Navigation.push(stackToPushTo, {
    component: {
      options: {
        topBar: {
          drawBehind: true,
          background: {
            translucent: true,
          },
          title: {
            text: translate(headerTitle),
          },
        },
        bottomTabs: {
          visible: !pushOverBottomTabs,
          animate: true,
        },
      },
      id: screenToPush,
      name: screenToPush,
      passProps: {
        ...props,
      },
    },
  });
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
            id: screenName,
            options: {
              topBar: {
                background: {
                  translucent: true,
                },
                drawBehind: true,
                leftButtons: [
                  {
                    id: screenName,
                    systemItem: 'stop',
                  },
                ],
                title: {
                  text: translate(headerTitle),
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

export const showOverlay = (name: string) =>
  Navigation.showOverlay({
    component: {
      name: name,
      options: {
        layout: {
          backgroundColor: 'transparent',
        },
        overlay: {
          interceptTouchOutside: true,
        },
      },
    },
  });

export const dismissOverlay = (overlayToDismiss: string) => {
  Navigation.dismissOverlay(overlayToDismiss);
};
