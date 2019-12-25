import React, { FC, useRef, useState } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import TextInput from '../../components/TextInput/TextInput';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from '../../components/ScrollView/ScrollView';
import OtherText from '../../components/OtherText/OtherText';
import { mediumFont } from '../../constants/constants';
import { useTranslation } from 'react-i18next';
import { showForgotPasswordModal } from './Login.functions';
import BottomButton from '../../components/BottomButton/BottomButton';
import { mainAppColor } from '../../constants/colors';
import Haptic from '../../utils/Haptic';

const LogInScreen: FC = () => {
  const secondInput = useRef(null);
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const goToForgotPassword = () => {
    showForgotPasswordModal({ email });
  };

  const onPressLogin = () => {
    Haptic.error();
  };

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView>
        <ScrollView>
          <TextInput
            returnKeyType="next"
            blurOnSubmit={false}
            style={{ marginTop: 30 }}
            autoCorrect={false}
            autoCapitalize="none"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCompleteType="email"
            placeholder="general.emailAddress"
            onChangeText={text => setEmail(text)}
            // @ts-ignore
            onSubmitEditing={() => secondInput.current.focus()}
          />
          <TextInput
            ref={secondInput}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            keyboardType="default"
            autoCompleteType="password"
            placeholder="general.password"
            onChangeText={() => null}
          />
          <OtherText
            style={{ textAlign: 'center', fontFamily: mediumFont }}
            onPress={goToForgotPassword}
            color={mainAppColor}>
            {t('general.forgotPassword')}?
          </OtherText>
          <BottomButton
            onPress={onPressLogin}
            buttonName={t('general.logIn')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default LogInScreen;
