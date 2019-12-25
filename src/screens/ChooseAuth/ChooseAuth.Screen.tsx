import React, { FC, useEffect } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import Text from '../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import OtherText from '../../components/OtherText/OtherText';
import ChooseAuthButton from './ChooseAuth.Button';
import { pushScreen } from '../../navigation/navigation.actions';
import { mainAppColor } from 'constants/colors';
import SplashScreen from 'react-native-splash-screen';

const ChooseAuthScreen: FC = () => {
  const { t } = useTranslation();
  const navigate = (screenToPush: string, headerTitle: string) =>
    pushScreen('ChooseAuthStack', screenToPush, headerTitle);

  useEffect(() => {
    if (Platform.OS === 'ios') {
      SplashScreen.hide();
      StatusBar.setHidden(false, 'slide');
    }
  });

  return (
    <ScreenWrapper style={{ alignItems: 'center' }}>
      <View style={ChooseAuthScreenStyles.container}>
        <ChooseAuthButton
          onPress={() => navigate('LogInScreen', 'general.logIn')}
          name="logIn"
          screenToPush="LogInScreen"
        />
        <ChooseAuthButton
          onPress={() => null}
          name="facebook"
          screenToPush="LogInScreen"
        />
        <Text onPress={() => navigate('SignUpScreen', 'general.signUp')}>
          {t('chooseAuthScreen.dontHaveAnAccount')}&nbsp;&nbsp;
          <OtherText color={mainAppColor}>{t('general.signUp')}</OtherText>
        </Text>
      </View>
    </ScreenWrapper>
  );
};

const ChooseAuthScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 15,
  },
});

export default ChooseAuthScreen;
