import React, { FC, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import ScrollView from 'components/ScrollView/ScrollView';

const HomeScreen: FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  });
  return <ScrollView />;
};

export default HomeScreen;
