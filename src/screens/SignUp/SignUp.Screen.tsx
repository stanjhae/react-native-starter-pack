import React, { FC, useRef } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from '../../components/ScrollView/ScrollView';
import TextInput from '../../components/TextInput/TextInput';
import BottomButton from '../../components/BottomButton/BottomButton';
import { useTranslation } from 'react-i18next';

const SigUpScreen: FC = () => {
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const { t } = useTranslation();

  const onPressSignUp = () => {};
  return (
    <ScreenWrapper>
      <KeyboardAvoidingView>
        <ScrollView>
          <TextInput
            returnKeyType="next"
            blurOnSubmit={false}
            style={{ marginTop: 30 }}
            autoCorrect={false}
            autoCapitalize="words"
            textContentType="givenName"
            autoCompleteType="name"
            placeholder="general.firstName"
            onChangeText={() => null}
            // @ts-ignore
            onSubmitEditing={() => secondInput.current.focus()}
          />
          <TextInput
            ref={secondInput}
            returnKeyType="next"
            blurOnSubmit={false}
            autoCorrect={false}
            autoCapitalize="words"
            textContentType="familyName"
            autoCompleteType="name"
            placeholder="general.lastName"
            onChangeText={() => null}
            // @ts-ignore
            onSubmitEditing={() => thirdInput.current.focus()}
          />
          <TextInput
            ref={thirdInput}
            returnKeyType="next"
            blurOnSubmit={false}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCompleteType="email"
            placeholder="general.emailAddress"
            onChangeText={() => null}
            // @ts-ignore
            onSubmitEditing={() => fourthInput.current.focus()}
          />
          <TextInput
            // @ts-ignore
            ref={fourthInput}
            blurOnSubmit={false}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            textContentType="newPassword"
            keyboardType="default"
            autoCompleteType="password"
            placeholder="general.password"
            onChangeText={() => null}
          />
          <BottomButton
            onPress={onPressSignUp}
            buttonName={t('general.signUp')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default SigUpScreen;
