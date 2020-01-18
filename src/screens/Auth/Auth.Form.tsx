import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import TextInput from 'components/TextInput/TextInput';
import BottomButton from 'components/BottomButton/BottomButton';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { loginSchema, signUpSchema } from 'utils/validationSchema';
import { invalidForm } from 'utils/utils.functions';
import OtherText from 'components/OtherText/OtherText';
import { mediumFont } from 'constants/constants';
import { mainAppColor } from 'constants/colors';
import { showModal } from 'navigation/navigation.actions';

interface AuthFormProps {
  currentStack?: string;
  type: string;
  action: any;
}

const AuthForm: FC<AuthFormProps> = ({ type, action }) => {
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const { t } = useTranslation();
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const setShowHide = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    getValues,
    errors,
    formState,
  } = useForm({
    mode: 'onSubmit',
    validationSchema: type === 'signUp' ? signUpSchema : loginSchema,
  });

  useEffect(() => {
    type === 'signUp' && register('firstName');
    type === 'signUp' && register('lastName');
    invalidForm(formState.isSubmitted, errors);
    register('email');
    register('password');
  }, [errors, formState, register, type]);

  //TODO: Improve implementation
  const setFirstName = useCallback(
    value => {
      setValue('firstName', value);
    },
    [setValue],
  );

  const setLastName = useCallback(
    value => {
      setValue('lastName', value);
    },
    [setValue],
  );

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

  const handleFirstNameValidation = useCallback(() => {
    triggerValidation('firstName').then(null);
  }, [triggerValidation]);

  const handleLastNameValidation = useCallback(() => {
    triggerValidation('firstName').then(null);
  }, [triggerValidation]);

  const handleEmailValidation = useCallback(() => {
    triggerValidation('email').then(null);
  }, [triggerValidation]);

  const handlePasswordValidation = useCallback(() => {
    triggerValidation('password').then(null);
  }, [triggerValidation]);

  const handleAction = (values: any) => {
    action(values);
  };

  const goToForgotPassword = useCallback(() => {
    console.log('rendering');
    showModal(
      'ForgotPasswordStack',
      'ForgotPasswordScreen',
      'general.forgotPassword',
      { email: getValues().email },
    );
  }, [getValues]);

  return (
    <>
      {type === 'signUp' && (
        <>
          <TextInput
            returnKeyType="next"
            blurOnSubmit={false}
            autoCorrect={false}
            style={{ marginTop: 30 }}
            autoCapitalize="words"
            textContentType="givenName"
            autoCompleteType="name"
            placeholder="general.firstName"
            onChangeText={setFirstName}
            onBlur={handleFirstNameValidation}
            error={errors.firstName?.message}
            // @ts-ignore
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
            onChangeText={setLastName}
            onBlur={handleLastNameValidation}
            error={errors.lastName?.message}
            // @ts-ignore
            onSubmitEditing={() => thirdInput.current.focus()}
          />
        </>
      )}
      <TextInput
        ref={thirdInput}
        returnKeyType="next"
        blurOnSubmit={false}
        autoCorrect={false}
        style={{ marginTop: type !== 'signUp' ? 30 : 0 }}
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
        autoCompleteType="email"
        placeholder="general.emailAddress"
        onChangeText={setEmail}
        onBlur={handleEmailValidation}
        error={errors.email?.message}
        // @ts-ignore
        onSubmitEditing={() => fourthInput.current.focus()}
      />
      <TextInput
        ref={fourthInput}
        autoCorrect={false}
        secureTextEntry={secureTextEntry}
        onPressShowHide={setShowHide}
        showHide={secureTextEntry ? 'show' : 'hide'}
        autoCapitalize="none"
        textContentType={type === 'logIn' ? 'password' : 'newPassword'}
        keyboardType="default"
        autoCompleteType="password"
        placeholder="general.password"
        onChangeText={setPassword}
        error={errors.password?.message}
        onBlur={handlePasswordValidation}
      />
      {type === 'logIn' && (
        <OtherText
          style={{ textAlign: 'center', fontFamily: mediumFont }}
          onPress={goToForgotPassword}
          color={mainAppColor}>
          {t('general.forgotPassword')}?
        </OtherText>
      )}
      <BottomButton
        disabled={false}
        onPress={handleSubmit(handleAction)}
        buttonName={type}
      />
    </>
  );
};

export default AuthForm;
