import React, { FC, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import TopBar from 'components/TopBar/TopBar';

const HomeScreen: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <>
      <TopBar noIcons currentStack="" title="general.explore" />
    </>
  );
};

export default HomeScreen;
