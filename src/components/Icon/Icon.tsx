import React, { FC } from 'react';
import { Image } from 'react-native';
import { useDarkModeContext } from 'react-native-dark-mode';
import { standardDarkLightColors } from 'constants/constants';

interface IconProps {
  icon: string | undefined;
  size?: number;
  customTintColor?: string;
  style?: object;
}

const Icon: FC<IconProps> = ({ icon, size, customTintColor, style }) => {
  const tintColor = standardDarkLightColors[useDarkModeContext()];
  return (
    <Image
      style={{
        ...(style as object),
        tintColor: customTintColor || tintColor,
        height: size,
        width: size,
      }}
      source={{ uri: icon }}
    />
  );
};

Icon.defaultProps = {
  icon: '',
  size: 22,
};

export default Icon;
