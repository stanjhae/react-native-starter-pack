import React, { FC, useEffect, useState } from 'react';
import { View } from 'react-native';
import { Navigation } from 'react-native-navigation';

// TODO: get values before splash screen hides and set with redux

interface HeaderSpacingProps {
  modal?: boolean;
}

const HeaderSpacing: FC<HeaderSpacingProps> = ({ modal }) => {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const getConstants = async () => {
      const start = new Date().getMilliseconds();
      const { statusBarHeight, topBarHeight } = await Navigation.constants();
      setHeight(modal ? topBarHeight + statusBarHeight : topBarHeight);
      const end = new Date().getMilliseconds();
      console.log(`Took ${end - start}ms to calculate the header spacing.`);
    };

    getConstants().then();
  }, [modal]);
  return <View style={{ height, width: '100%' }} />;
};

export default HeaderSpacing;
