import React, { FC, forwardRef, RefObject } from 'react';
import {
  NativeSyntheticEvent,
  ReturnKeyTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput as T,
  TextInput as Input,
  TextInputSubmitEditingEventData,
  View,
  ViewStyle,
} from 'react-native';
import { borderBottomWidth, mediumFont } from 'constants/constants';
import { useDarkModeContext } from 'react-native-dark-mode';
import { useTranslation } from 'react-i18next';
import { errorColor } from 'constants/colors';
import OtherText from 'components/OtherText/OtherText';

interface TextInputProps {
  onChangeText: (text: string) => void;
  onBlur?: () => void;
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
  error?: string;
  showHide?: string;
  onPressShowHide?: () => void;
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
      onBlur,
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
      error,
      showHide,
      onPressShowHide,
    },
    ref,
  ) => {
    const { t } = useTranslation();
    const mode = useDarkModeContext();
    const isPassword = () =>
      textContentType === 'password' || autoCompleteType === 'password';
    return (
      <>
        <View
          style={[
            styles.container,
            {
              ...(style as object),
              borderBottomWidth: error ? 1 : borderBottomWidth,
              borderBottomColor: error ? errorColor : color[mode],
              marginBottom: error ? 10 : 30,
            },
          ]}>
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
            onBlur={onBlur}
            placeholderTextColor="#999"
            placeholder={t(placeholder)}
            clearButtonMode={isPassword() ? 'never' : 'always'}
            style={[
              styles.textInput,
              {
                color: color[mode],
              },
            ]}
            onChangeText={text => onChangeText(text)}
          />
          {isPassword() ? (
            <OtherText onPress={onPressShowHide}>
              {showHide && t(showHide)}
            </OtherText>
          ) : null}
        </View>
        {error ? (
          <OtherText style={styles.errorText}>{t(error)}</OtherText>
        ) : null}
      </>
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
    flexDirection: 'row',
    height: 44,
    alignItems: 'center',
  },
  textInput: {
    fontFamily: mediumFont,
    height: '100%',
    flex: 1,
  },
  errorText: {
    marginBottom: 20,
    color: errorColor,
    fontFamily: mediumFont,
  },
});

export default TextInput;
