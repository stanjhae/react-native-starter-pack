import React, { FC, useCallback, useEffect, useRef } from 'react';
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
import TopBar from 'components/TopBar/TopBar';
import { invalidForm } from 'utils/utils.functions';

interface LogInScreenProps {
  currentStack: string;
}

const mapDispatch = (dispatch: Dispatch) => ({
  login: (payload: any) => dispatch.users.login(payload),
});

const LogInScreen: FC<LogInScreenProps & ReturnType<typeof mapDispatch>> = ({
  login,
  currentStack,
}) => {
  const secondInput = useRef(null);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    formState,
    triggerValidation,
    errors,
    getValues,
  } = useForm({
    mode: 'onSubmit',
    validationSchema: loginSchema,
  });

  const goToForgotPassword = () => {
    showForgotPasswordModal({ email: getValues().email });
  };

  useEffect(() => {
    invalidForm(errors);
    register('email');
    register('password');
  }, [register, formState, errors]);

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
    login(values).then(null);
  };

  return (
    <>
      <TopBar
        currentStack={currentStack}
        leftIconSize={19}
        title="general.logIn"
      />
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
            error={errors.email && errors.email.message}
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
            onChangeText={setPassword}
            onBlur={handlePasswordValidation}
            error={errors.password && errors.password.message}
          />
          <OtherText
            style={{ textAlign: 'center', fontFamily: mediumFont }}
            onPress={goToForgotPassword}
            color={mainAppColor}>
            {t('general.forgotPassword')}?
          </OtherText>
          <BottomButton
            onPress={handleSubmit(handleLogin)}
            buttonName="general.logIn"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default connect(null, mapDispatch)(LogInScreen);
