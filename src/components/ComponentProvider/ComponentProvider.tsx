import { DarkModeProvider as DP } from 'react-native-dark-mode';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

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
