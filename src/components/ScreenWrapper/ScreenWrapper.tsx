import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';
import SafeAreaView from 'react-native-safe-area-view';

interface ScreenWrapperProps {
  style?: StyleProp<ViewStyle>;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({ children, style }) => {
  const styles = useDynamicStyleSheet(ScreenWrapperStyles);
  return (
    <SafeAreaView style={[styles.container, { ...(style as object) }]}>
      {children}
    </SafeAreaView>
  );
};

const ScreenWrapperStyles = new DynamicStyleSheet({
  container: {
    flex: 1,
    backgroundColor: new DynamicValue('white', 'black'),
  },
});

export default ScreenWrapper;
