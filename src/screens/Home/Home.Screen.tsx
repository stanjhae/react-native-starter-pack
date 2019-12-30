import React, { FC, useEffect } from 'react';
import Text from 'components/Text/Text';
import SplashScreen from 'react-native-splash-screen';
import TabScreenWrapper from 'components/TabScreenWrapper/TabScreenWrapper';

const HomeScreen: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <TabScreenWrapper title="general.explore">
      <Text>Explore</Text>
    </TabScreenWrapper>
  );
};

export default HomeScreen;
