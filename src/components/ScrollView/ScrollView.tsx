import React, { FC, useEffect } from 'react';
import { ScrollView as SV, StyleProp, ViewStyle } from 'react-native';

interface ScrollViewProps {
  style?: StyleProp<ViewStyle>;
}

const ScrollView: FC<ScrollViewProps> = ({ style, children, ...props }) => {
  useEffect(() => {}, []);
  return (
    <SV
      {...props}
      style={{ paddingHorizontal: 20, ...(style as object) }}
      keyboardShouldPersistTaps="handled"
      contentInsetAdjustmentBehavior="never">
      {children}
    </SV>
  );
};

export default ScrollView;
