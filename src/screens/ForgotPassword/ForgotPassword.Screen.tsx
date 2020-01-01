import React, { FC, useCallback, useEffect } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import KeyboardAvoidingView from 'components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from 'components/ScrollView/ScrollView';
import TextInput from 'components/TextInput/TextInput';
import Text from 'components/Text/Text';
import { useTranslation } from 'react-i18next';
import { boldFont } from 'constants/constants';
import BottomButton from 'components/BottomButton/BottomButton';
import SafeAreaView from 'react-native-safe-area-view';
import TopBar from 'components/TopBar/TopBar';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { useForm } from 'react-hook-form';
import { forgotPasswordSchema } from 'utils/validationSchema';
import { invalidForm } from 'utils/utils.functions';

const mapDispatch = (dispatch: Dispatch) => ({
  forgotPassword: (email: string) => dispatch.users.forgotPassword(email),
});

interface ForgotPasswordScreenProps {
  email?: string;
  currentStack: string;
}
//TODO: Handle initial validation
const ForgotPasswordScreen: FC<ForgotPasswordScreenProps &
  ReturnType<typeof mapDispatch>> = ({
  email,
  currentStack,
  forgotPassword,
}) => {
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
    forgotPassword(values.email).then(null);
  };

  return (
    <ScreenWrapper>
      <TopBar
        currentStack={currentStack}
        leftIconSize={18}
        modal
        title="general.forgotPassword"
      />
      <KeyboardAvoidingView>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
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
            <BottomButton
              buttonName="Reset"
              onPress={handleSubmit(onPressReset)}
            />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(ForgotPasswordScreen);
