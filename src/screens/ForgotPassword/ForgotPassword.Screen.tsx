import React, { FC } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView/KeyboardAvoidingView';
import ScrollView from '../../components/ScrollView/ScrollView';
import TextInput from '../../components/TextInput/TextInput';
import Text from '../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import { boldFont } from '../../constants/constants';
import BottomButton from '../../components/BottomButton/BottomButton';
import Haptic from '../../utils/Haptic';
import SafeAreaView from 'react-native-safe-area-view';

interface ForgotPasswordScreenProps {
  email?: string;
}

const ForgotPasswordScreen: FC<ForgotPasswordScreenProps> = ({ email }) => {
  const { t } = useTranslation();

  const onPressReset = () => {
    Haptic.error();
  };

  return (
    <ScreenWrapper>
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
              onChangeText={() => null}
            />
            <BottomButton buttonName="Reset" onPress={onPressReset} />
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
};

export default ForgotPasswordScreen;
