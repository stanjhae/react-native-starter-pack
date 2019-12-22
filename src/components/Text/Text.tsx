import React, { FC } from 'react';
import { StyleProp, Text as T, TextStyle } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';
import { baseFontSize, normalFont } from '../../constants/constants';

interface TextProps {
  style?: StyleProp<TextStyle>;
}

const Text: FC<TextProps> = ({ children, style }) => {
  const TextStyles = useDynamicStyleSheet(styles);
  return <T style={[TextStyles.text, { ...(style as object) }]}>{children}</T>;
};

const styles = new DynamicStyleSheet({
  text: {
    color: new DynamicValue('black', 'white'),
    fontSize: baseFontSize,
    fontFamily: normalFont,
  },
});

export default Text;
