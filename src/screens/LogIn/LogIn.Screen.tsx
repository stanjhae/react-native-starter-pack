import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { loginSchema } from 'utils/validationSchema';
import TextInput from 'components/TextInput/TextInput';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import OtherText from 'components/OtherText/OtherText';
import { useTranslation } from 'react-i18next';
import { showForgotPasswordModal } from './Login.functions';
import BottomButton from 'components/BottomButton/BottomButton';
import { mainAppColor } from 'constants/colors';
import TopBar from 'components/TopBar/TopBar';
import { invalidForm } from 'utils/utils.functions';

interface LogInScreenProps {
  currentStack: string;
}

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
    mode: 'onBlur',
    validationSchema: loginSchema,
  });
  const [secureText, setSecureText] = useState(true);

  const goToForgotPassword = () => {
    showForgotPasswordModal({ email: getValues().email });
  };

  useEffect(() => {
    invalidForm(formState.isSubmitted, errors);
    register('email');
    register('password');
  }, [register, formState, errors, secureText]);

  //TODO: Improve implementation
  const setEmail = useCallback(
    value => {
      setValue('email', value);
    },
    [setValue],
  );

  const onPressShowHide = useCallback(() => {
    setSecureText(prevState => !prevState);
  }, [setSecureText]);

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
            showHide={`general.${secureText ? 'show' : 'hide'}`}
            onPressShowHide={onPressShowHide}
            ref={secondInput}
            autoCorrect={false}
            secureTextEntry={secureText}
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
            style={{ textAlign: 'center' }}
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

const mapDispatch = (dispatch: Dispatch) => ({
  login: (payload: any) => dispatch.users.login(payload),
});

export default connect(null, mapDispatch)(LogInScreen);
