import React, { FC } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';
import { baseFontSize, mediumFont } from 'constants/constants';
import { mainAppColor } from 'constants/colors';

interface OtherTextProps {
  color?: string;
  style?: StyleProp<TextStyle>;
  onPress?: (event: GestureResponderEvent) => void;
}
const OtherText: FC<OtherTextProps> = ({ children, color, style, onPress }) => (
  <Text
    onPress={onPress}
    style={[
      OtherTextStyles.text,
      { color: color || mainAppColor, ...(style as object) },
    ]}>
    {children}
  </Text>
);

const OtherTextStyles = StyleSheet.create({
  text: {
    fontSize: baseFontSize,
    fontFamily: mediumFont,
  },
});

export default OtherText;
