import React, { FC } from 'react';
import { Text as T } from 'react-native';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';

const Text: FC = ({ children }) => {
  const TextStyles = useDynamicStyleSheet(styles);
  return <T style={TextStyles.text}>{children}</T>;
};

const styles = new DynamicStyleSheet({
  text: {
    color: new DynamicValue('black', 'white'),
  },
});

export default Text;
