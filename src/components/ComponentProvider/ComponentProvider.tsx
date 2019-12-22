import { DarkModeProvider as DP } from 'react-native-dark-mode';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const ComponentProvider = (Component: any) => (props: any) => (
  <DP>
    <SafeAreaProvider>
      <Component {...props} />
    </SafeAreaProvider>
  </DP>
);

export default ComponentProvider;
