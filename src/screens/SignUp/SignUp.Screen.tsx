import React, { FC, useCallback, useEffect, useRef } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import TextInput from 'components/TextInput/TextInput';
import BottomButton from 'components/BottomButton/BottomButton';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { signUpSchema } from 'utils/validationSchema';
import TopBar from 'components/TopBar/TopBar';
import { invalidForm } from 'utils/utils.functions';

interface SignUpScreenProps {
  currentStack: string;
}

const mapDispatch = (dispatch: Dispatch) => ({
  signUp: (payload: any) => dispatch.users.signUp(payload),
});

const SignUpScreen: FC<SignUpScreenProps & ReturnType<typeof mapDispatch>> = ({
  signUp,
  currentStack,
}) => {
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    errors,
  } = useForm({
    mode: 'onBlur',
    validationSchema: signUpSchema,
  });

  useEffect(() => {
    invalidForm(errors);
    register('firstName');
    register('lastName');
    register('email');
    register('password');
  }, [errors, register]);

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

  //TODO: Declare type
  const handleSignUp = (values: any) => {
    signUp(values);
  };

  //TODO: Combine login and sign up forms
  return (
    <ScreenWrapper>
      <TopBar currentStack={currentStack} title="general.signUp" />
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
            onChangeText={setEmail}
            onBlur={handleEmailValidation}
            error={errors.email?.message}
            // @ts-ignore
            onSubmitEditing={() => fourthInput.current.focus()}
          />
          <TextInput
            ref={fourthInput}
            autoCorrect={false}
            secureTextEntry
            autoCapitalize="none"
            textContentType="newPassword"
            keyboardType="default"
            autoCompleteType="password"
            placeholder="general.password"
            onChangeText={setPassword}
            error={errors.password?.message}
            onBlur={handlePasswordValidation}
          />
          <BottomButton
            onPress={handleSubmit(handleSignUp)}
            buttonName={t('general.signUp')}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(SignUpScreen);
