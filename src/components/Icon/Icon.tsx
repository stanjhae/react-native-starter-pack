import React, { FC } from 'react';
import { Image } from 'react-native';

interface IconProps {
  icon: string | undefined;
  size?: number;
}

const Icon: FC<IconProps> = ({ icon, size }) => (
  <Image style={{ height: size, width: size }} source={{ uri: icon }} />
);

Icon.defaultProps = {
  icon: '',
  size: 22,
};

export default Icon;
