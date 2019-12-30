import React, { FC, useCallback, useEffect, useRef } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import TextInput from 'components/TextInput/TextInput';
import BottomButton from 'components/BottomButton/BottomButton';
import { useTranslation } from 'react-i18next';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { signUpSchema } from 'utils/validationSchema';

const mapDispatch = (dispatch: Dispatch) => ({
  signUp: (payload: any) => dispatch.users.signUp(payload),
});

const SignUpScreen: FC<ReturnType<typeof mapDispatch>> = ({ signUp }) => {
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
    formState,
  } = useForm({
    mode: 'onBlur',
    validationSchema: signUpSchema,
  });

  useEffect(() => {
    register('firstName');
    register('lastName');
    register('email');
    register('password');
  }, [register]);

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
            // @ts-ignore
            onSubmitEditing={() => secondInput.current.focus()}
          />
          {errors.firstName && <Text>{errors.firstName.message}</Text>}
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
            // @ts-ignore
            onSubmitEditing={() => thirdInput.current.focus()}
          />
          {errors.lastName && <Text>{errors.lastName.message}</Text>}
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
            // @ts-ignore
            onSubmitEditing={() => fourthInput.current.focus()}
          />
          {errors.email && <Text>{errors.email.message}</Text>}
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
            onChangeText={setPassword}
            onBlur={handlePasswordValidation}
          />
          {errors.password && <Text>{errors.password.message}</Text>}
          {formState.isValid && (
            <BottomButton
              onPress={handleSubmit(handleSignUp)}
              buttonName={t('general.signUp')}
            />
          )}
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(SignUpScreen);
