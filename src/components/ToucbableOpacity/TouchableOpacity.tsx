import React, { FC } from 'react';
import { StyleProp, TouchableOpacity as TO, ViewStyle } from 'react-native';

interface TouchableOpacityProps {
  onPress: any;
  style?: StyleProp<ViewStyle>;
}

const TouchableOpacity: FC<TouchableOpacityProps> = ({
  onPress,
  children,
  style,
  ...props
}) => {
  return (
    <TO {...props} onPress={onPress} style={style} activeOpacity={1}>
      {children}
    </TO>
  );
};

export default TouchableOpacity;
