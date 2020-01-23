import React, { FC } from 'react';
import { StyleProp, Text as T, TextProps, TextStyle } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';
import { baseFontSize, normalFont } from 'constants/constants';

interface TProps extends TextProps {
  style?: StyleProp<TextStyle>;
  onPress?: any;
}

const Text: FC<TProps> = ({ children, style, onPress, ...props }) => {
  const TextStyles = useDynamicStyleSheet(styles);
  return (
    <T
      {...props}
      onPress={onPress}
      style={[TextStyles.text, { ...(style as object) }]}>
      {children}
    </T>
  );
};

const styles = new DynamicStyleSheet({
  text: {
    color: new DynamicValue('black', 'white'),
    fontSize: baseFontSize,
    fontFamily: normalFont,
  },
});

export default Text;
