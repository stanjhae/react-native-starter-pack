import { Navigation } from 'react-native-navigation';
import { boldFont, tabBarScale } from 'constants/constants';
import { translate } from 'utils/utils.functions';

const topBar = {
  largeTitle: {
    visible: false,
    fontFamily: boldFont,
  },
  drawBehind: true,
  background: {
    translucent: true,
  },
};

// TODO: make code in this file more efficient

const goToMainApp = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        options: {
          bottomTabs: {
            titleDisplayMode: 'alwaysHide',
          },
        },
        id: 'bottomTabs',
        children: [
          {
            stack: {
              id: 'HomeStack',
              children: [
                {
                  component: {
                    options: {
                      topBar: {
                        ...topBar,
                        title: {
                          text: translate('general.explore'),
                        },
                      },
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'home',
                        },
                        // text: translate('general.explore'),
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
                      topBar: {
                        ...topBar,
                        title: {
                          text: translate('general.vendors'),
                        },
                      },
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'vendors',
                        },
                        // text: translate('general.vendors'),
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
                      topBar: {
                        ...topBar,
                        title: {
                          text: translate('general.profile'),
                        },
                      },
                      bottomTab: {
                        icon: {
                          scale: tabBarScale,
                          uri: 'profile',
                        },
                        // text: translate('general.profile'),
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
