import { DarkModeProvider as DP } from 'react-native-dark-mode';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';

const ComponentProvider = (Component: any) => (props: any) => (
  <DP>
    <SafeAreaProvider>
      {props.reduxStore ? (
        <Provider store={props.reduxStore}>
          <Component {...props} />
        </Provider>
      ) : (
        <Component {...props} />
      )}
    </SafeAreaProvider>
  </DP>
);

export default ComponentProvider;
