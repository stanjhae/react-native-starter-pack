import React, { FC, useEffect } from 'react';
import Text from '../../components/Text/Text';
import { Navigation } from 'react-native-navigation';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';

const AuthLoadingScreen: FC = () => {
  useEffect(() => {
    setTimeout(() => {
      Navigation.setRoot({
        root: {
          stack: {
            id: 'ChooseAuthStack',
            children: [
              {
                component: {
                  options: {
                    topBar: {
                      visible: false,
                    },
                  },
                  name: 'ChooseAuthScreen',
                },
              },
            ],
          },
        },
      });
    }, 200);
  });
  return (
    <ScreenWrapper>
      <Text>AuthLoading screen</Text>
    </ScreenWrapper>
  );
};

export default AuthLoadingScreen;
