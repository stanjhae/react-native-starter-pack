import React, { FC } from 'react';
import { ScrollView as SV, StyleProp, ViewStyle } from 'react-native';

interface ScrollViewProps {
  style?: StyleProp<ViewStyle>;
}

const ScrollView: FC<ScrollViewProps> = ({ style, children, ...props }) => (
  <SV
    {...props}
    style={{ paddingHorizontal: 20, ...(style as object) }}
    keyboardShouldPersistTaps="handled"
    keyboardDismissMode="interactive"
    contentInsetAdjustmentBehavior="never">
    {children}
  </SV>
);

export default ScrollView;
