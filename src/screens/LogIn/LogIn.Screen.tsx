import React, { FC, useCallback, useEffect } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import Text from 'components/Text/Text';
import { Button, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { loginSchema } from 'utils/validationSchema';

const mapDispatch = (dispatch: Dispatch) => ({
  login: (payload: any) => dispatch.users.login(payload),
});

const LogInScreen: FC<ReturnType<typeof mapDispatch>> = ({ login }) => {
  const {
    register,
    handleSubmit,
    setValue,
    triggerValidation,
    errors,
    formState,
  } = useForm({
    validationSchema: loginSchema,
  });

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

  //TODO: Declare type
  const handleLogin = (values: any) => {
    login(values).then(null);
  };

  //TODO: Combine login and sign up forms
  return (
    <ScreenWrapper>
      <ScrollView>
        <Text>LoginScreen</Text>
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
          <Button title={'Login'} onPress={handleSubmit(handleLogin)} />
        )}
      </ScrollView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(LogInScreen);
