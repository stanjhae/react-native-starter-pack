import React, { FC, forwardRef, RefObject } from 'react';
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput as T,
  TextInput as Input,
  TextInputSubmitEditingEventData,
  ViewStyle,
} from 'react-native';
import constants, {
  borderBottomWidth,
  mediumFont,
} from '../../constants/constants';
import { useDarkModeContext } from 'react-native-dark-mode';
import { useTranslation } from 'react-i18next';

interface TextInputProps {
  onChangeText: (text: string) => void;
  placeholder: string;
  autoCompleteType: any;
  textContentType: any;
  keyboardType?: any;
  autoFocus?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
  onSubmitEditing?: (
    event: NativeSyntheticEvent<TextInputSubmitEditingEventData>,
  ) => void;
  ref?: RefObject<T>;
  blurOnSubmit?: boolean;
  returnKeyType?: ReturnKeyTypeOptions;
  defaultValue?: string;
}

const color = {
  light: 'black',
  dark: 'white',
};

const TextInput: FC<TextInputProps> = forwardRef(
  (
    {
      blurOnSubmit,
      onSubmitEditing,
      onChangeText,
      placeholder,
      autoCompleteType,
      textContentType,
      autoFocus,
      autoCorrect,
      keyboardType,
      autoCapitalize,
      secureTextEntry,
      style,
      returnKeyType,
      defaultValue,
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const mode = useDarkModeContext();
    return (
      <Input
        ref={ref}
        defaultValue={defaultValue}
        returnKeyType={returnKeyType}
        blurOnSubmit={blurOnSubmit}
        onSubmitEditing={onSubmitEditing}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        secureTextEntry={secureTextEntry}
        textContentType={textContentType}
        autoFocus={autoFocus}
        keyboardType={keyboardType}
        autoCompleteType={autoCompleteType}
        placeholderTextColor="#999"
        placeholder={t(placeholder)}
        clearButtonMode="always"
        style={[
          styles.container,
          {
            color: color[mode],
            borderBottomColor: color[mode],
            ...(style as object),
          },
        ]}
        onChangeText={text => onChangeText(text)}
      />
    );
  },
);

TextInput.defaultProps = {
  placeholder: '',
  onChangeText: () => {},
  textContentType: 'none',
  autoCompleteType: 'off',
  autoCapitalize: 'sentences',
};

const styles = StyleSheet.create({
  container: {
    fontFamily: mediumFont,
    marginBottom: 30,
    paddingVertical: 10,
    borderBottomWidth,
    width: constants.width * 0.9,
  },
});

export default TextInput;
