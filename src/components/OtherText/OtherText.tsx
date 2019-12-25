import React, { FC } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import { baseFontSize, normalFont } from '../../constants/constants';

interface OtherTextProps {
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
const OtherText: FC<OtherTextProps> = ({ children, color, style, onPress }) => (
  <Text
    onPress={onPress}
    style={[OtherTextStyles.text, { color, ...(style as object) }]}>
    {children}
  </Text>
);

const OtherTextStyles = StyleSheet.create({
  text: {
    fontSize: baseFontSize,
    fontFamily: normalFont,
  },
});

export default OtherText;
