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
              children: [
                {
                  component: {
                    id: 'homeStack',
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
              children: [
                {
                  component: {
                    id: 'vendorsStack',
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
              children: [
                {
                  component: {
                    id: 'profileStack',
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
