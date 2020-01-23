import React, { FC, useCallback, useEffect } from 'react';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import TextInput from 'components/TextInput/TextInput';
import Text from 'components/Text/Text';
import { useTranslation } from 'react-i18next';
import { boldFont } from 'constants/constants';
import BottomButton from 'components/BottomButton/BottomButton';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema } from 'utils/validationSchema';
import { invalidForm } from 'utils/utils.functions';
import HeaderSpacing from 'components/HeaderSpacing/HeaderSpacing';
import { dismissModal } from 'navigation/navigation.actions';

const mapDispatch = (dispatch: Dispatch) => ({
  forgotPassword: (email: string) => dispatch.users.forgotPassword(email),
});

interface ForgotPasswordScreenProps {
  email?: string;
  currentStack: string;
}
//TODO: Handle initial validation
const ForgotPasswordScreen: FC<ForgotPasswordScreenProps &
  ReturnType<typeof mapDispatch>> = ({ email, forgotPassword }) => {
  const {
    register,
    handleSubmit,
    setValue,
    errors,
    formState,
    triggerValidation,
  } = useForm({
    mode: 'onBlur',
    validationSchema: forgotPasswordSchema,
  });

  useEffect(() => {
    invalidForm(formState.isSubmitted, errors);
    register('email');
  }, [errors, formState.isSubmitted, register]);

  const setEmail = useCallback(
    value => {
      setValue('email', value);
    },
    [setValue],
  );

  const handleEmailValidation = useCallback(() => {
    triggerValidation('email').then(null);
  }, [triggerValidation]);

  const { t } = useTranslation();

  const onPressReset = (values: any) => {
    forgotPassword(values.email).then(() => {
      dismissModal('ForgotPasswordModal');
    });
  };

  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <HeaderSpacing />
        <Text
          style={{
            marginTop: 30,
            marginBottom: 30,
            fontFamily: boldFont,
            fontSize: 15,
          }}>
          {t('forgotPassword.enterYourEmail')}
        </Text>
        <TextInput
          defaultValue={email}
          autoCorrect={false}
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCompleteType="email"
          placeholder="general.emailAddress"
          onBlur={handleEmailValidation}
          onChangeText={setEmail}
          error={errors.email?.message}
        />
        <BottomButton buttonName="reset" onPress={handleSubmit(onPressReset)} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default connect(null, mapDispatch as Dispatch)(ForgotPasswordScreen);
