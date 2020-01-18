import React, { FC } from 'react';
import { TouchableOpacity as TO, TouchableOpacityProps } from 'react-native';

const TouchableOpacity: FC<TouchableOpacityProps> = ({
  children,
  ...props
}) => {
  return (
    <TO {...props} delayLongPress={100} activeOpacity={1}>
      {children}
    </TO>
  );
};

export default TouchableOpacity;
