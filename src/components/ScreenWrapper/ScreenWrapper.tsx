import React, { FC } from 'react';
import { SafeAreaView } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';

const ScreenWrapper: FC = ({ children }) => {
  const styles = useDynamicStyleSheet(ScreenWrapperStyles);
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

const ScreenWrapperStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    backgroundColor: new DynamicValue('white', 'black'),
  },
});

export default ScreenWrapper;
