import { Navigation } from 'react-native-navigation';
import { tabBarScale } from 'constants/constants';
import { translate } from 'utils/utils.functions';

const goToMainApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'bottomTabs',
        children: [
          {
            stack: {
              id: 'HomeStack',
              children: [
                {
                  component: {
                    options: {
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'home',
                        },
                        text: translate('general.explore'),
                      },
                    },
                    name: 'HomeScreen',
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'VendorsStack',
              children: [
                {
                  component: {
                    options: {
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'vendors',
                        },
                        text: translate('general.vendors'),
                      },
                    },
                    name: 'VendorsScreen',
                  },
                },
              ],
            },
          },
          {
            stack: {
              id: 'ProfileStack',
              children: [
                {
                  component: {
                    options: {
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'profile',
                        },
                        text: translate('general.profile'),
                      },
                    },
                    name: 'MoreScreen',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
};

export default goToMainApp;
