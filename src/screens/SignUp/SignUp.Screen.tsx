import React, { FC, useCallback, useEffect } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import Text from 'components/Text/Text';
import { Button, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { signUpSchema } from 'utils/validationSchema';

const mapDispatch = (dispatch: Dispatch) => ({
  signUp: (payload: any) => dispatch.users.signUp(payload),
});

const SignUpScreen: FC<ReturnType<typeof mapDispatch>> = ({ signUp }) => {
  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    errors,
    formState,
  } = useForm({
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
      <ScrollView>
        <Text>SignUpScreen</Text>
        <TextInput
          placeholder={'firstName'}
          onChangeText={setFirstName}
          onBlur={handleFirstNameValidation}
        />
        {errors.firstName && <Text>{errors.firstName.message}</Text>}
        <TextInput
          placeholder={'lastName'}
          onChangeText={setLastName}
          onBlur={handleLastNameValidation}
        />
        {errors.lastName && <Text>{errors.lastName.message}</Text>}
        <TextInput
          placeholder={'Email'}
          onChangeText={setEmail}
          onBlur={handleEmailValidation}
        />
        {errors.email && <Text>{errors.email.message}</Text>}
        <TextInput
          placeholder={'Password'}
          onChangeText={setPassword}
          onBlur={handlePasswordValidation}
        />
        {errors.password && <Text>{errors.password.message}</Text>}
        {formState.dirty && (
          <Button title={'Sign Up'} onPress={handleSubmit(handleSignUp)} />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(SignUpScreen);
