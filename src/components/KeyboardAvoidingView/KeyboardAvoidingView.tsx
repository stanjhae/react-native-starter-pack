import React, { FC } from 'react';
import { KeyboardAvoidingView as KAV, Platform } from 'react-native';

interface KeyboardAvoidingViewProps {
  style?: object;
}

const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = ({
  style,
  children,
}) => (
  <KAV
    behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    style={{ flex: 1, ...style }}>
    {children}
  </KAV>
);

export default KeyboardAvoidingView;
