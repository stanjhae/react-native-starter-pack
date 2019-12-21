import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeArea from 'react-native-safe-area-view';

const SafeAreaView: FC = ({ children }) => (
  <SafeAreaProvider>
    <SafeArea>{children}</SafeArea>
  </SafeAreaProvider>
);

export default SafeAreaView;
