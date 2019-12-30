import React, { FC, useCallback, useEffect, useRef } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import Text from 'components/Text/Text';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { loginSchema } from 'utils/validationSchema';
import TextInput from 'components/TextInput/TextInput';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import OtherText from 'components/OtherText/OtherText';
import { mediumFont } from 'constants/constants';
import { useTranslation } from 'react-i18next';
import { showForgotPasswordModal } from './Login.functions';
import BottomButton from 'components/BottomButton/BottomButton';
import { mainAppColor } from 'constants/colors';
import Haptic from 'utils/Haptic';

const mapDispatch = (dispatch: Dispatch) => ({
  login: (payload: any) => dispatch.users.login(payload),
});

const LogInScreen: FC<ReturnType<typeof mapDispatch>> = ({ login }) => {
  const secondInput = useRef(null);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    errors,
    formState,
    getValues,
  } = useForm({
    mode: 'onBlur',
    validationSchema: loginSchema,
  });

  const goToForgotPassword = () => {
    showForgotPasswordModal({ email: getValues().email });
  };

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  //TODO: Improve implementation
  const setEmail = useCallback(
    value => {
      setValue('email', value);
    },
    [setValue],
  );

  const setPassword = useCallback(
    value => {
      setValue('password', value);
    },
    [setValue],
  );

  const handleEmailValidation = useCallback(() => {
    triggerValidation('email').then(null);
  }, [triggerValidation]);

  const handlePasswordValidation = useCallback(() => {
    triggerValidation('password').then(null);
  }, [triggerValidation]);

  const handleLogin = (values: any) => {
    Haptic.error();
    login(values).then(null);
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
            onChangeText={setEmail}
            onBlur={handleEmailValidation}
            onSubmitEditing={() => secondInput.current?.focus()}
          />
          {errors.email && <Text>{errors.email.message}</Text>}
          <TextInput
            ref={secondInput}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            textContentType="password"
            keyboardType="default"
            autoCompleteType="password"
            placeholder="general.password"
            onChangeText={setPassword}
            onBlur={handlePasswordValidation}
          />
          {errors.password && <Text>{errors.password.message}</Text>}
          <OtherText
            style={{ textAlign: 'center', fontFamily: mediumFont }}
            onPress={goToForgotPassword}
            color={mainAppColor}>
            {t('general.forgotPassword')}?
          </OtherText>
          {formState.isValid && (
            <BottomButton
              onPress={handleSubmit(handleLogin)}
              buttonName={t('general.logIn')}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(LogInScreen);
