import React, { FC, useEffect, useState } from 'react';
import { KeyboardAvoidingView as KAV, Platform } from 'react-native';
import { Navigation } from 'react-native-navigation';

interface KeyboardAvoidingViewProps {
  style?: object;
}

const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = ({
  style,
  children,
}) => {
  const [offset, setOffSet] = useState(0);
  useEffect(() => {
    const getConstants = async () => {
      const { topBarHeight, statusBarHeight } = await Navigation.constants();
      setOffSet(topBarHeight + statusBarHeight);
    };
    getConstants();
  });
  return (
    <KAV
      keyboardVerticalOffset={offset}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, ...style }}>
      {children}
    </KAV>
  );
};

export default KeyboardAvoidingView;
