import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { baseFontSize } from '../../constants/constants';

interface OtherTextProps {
  color?: string;
}
const OtherText: FC<OtherTextProps> = ({ children, color }) => (
  <Text style={[OtherTextStyles.text, { color }]}>{children}</Text>
);

const OtherTextStyles = StyleSheet.create({
  text: {
    fontSize: baseFontSize,
  },
});

export default OtherText;
