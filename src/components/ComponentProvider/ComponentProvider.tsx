import { DarkModeProvider as DP } from 'react-native-dark-mode';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';

const ComponentProvider = (Component: any, style?: any) => (props: any) => (
  <DP>
    <SafeAreaProvider>
      {props.reduxStore ? (
        <Provider store={props.reduxStore}>
          <ScreenWrapper style={style}>
            <Component {...props} />
          </ScreenWrapper>
        </Provider>
      ) : (
        <ScreenWrapper style={style}>
          <Component {...props} />
        </ScreenWrapper>
      )}
    </SafeAreaProvider>
  </DP>
);

export default ComponentProvider;
