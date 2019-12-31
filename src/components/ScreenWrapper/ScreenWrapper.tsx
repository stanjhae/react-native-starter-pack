import React, { FC, useEffect } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';
import SafeAreaView from 'react-native-safe-area-view';

interface ScreenWrapperProps {
  style?: StyleProp<ViewStyle>;
  customStyle?: StyleProp<ViewStyle>;
}

const ScreenWrapper: FC<ScreenWrapperProps> = ({
  children,
  style,
  customStyle,
}) => {
  const styles = useDynamicStyleSheet(ScreenWrapperStyles);
  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={[
        styles.container,
        { ...(style as object), ...(customStyle as object) },
      ]}>
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
