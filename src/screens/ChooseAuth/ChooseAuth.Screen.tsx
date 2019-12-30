import React, { FC, useEffect } from 'react';
import Text from '../../components/Text/Text';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import OtherText from 'components/OtherText/OtherText';
import ChooseAuthButton from './ChooseAuth.Button';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { pushScreen } from 'navigation/navigation.actions';
import { mainAppColor } from 'constants/colors';
import SplashScreen from 'react-native-splash-screen';

const mapDispatch = (dispatch: Dispatch) => ({
  login: () => dispatch.users.facebookLogin(),
});

const ChooseAuthScreen: FC<ReturnType<typeof mapDispatch>> = ({ login }) => {
  const { t } = useTranslation();
  const navigate = (screenToPush: string, headerTitle: string) =>
    pushScreen('ChooseAuthStack', screenToPush, headerTitle);

  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ScreenWrapper style={{ alignItems: 'center' }}>
      <View style={ChooseAuthScreenStyles.container}>
        <ChooseAuthButton
          onPress={() => navigate('LogInScreen', 'general.logIn')}
          name="logIn"
        />
        <ChooseAuthButton onPress={() => null} name="facebook" />
        <ChooseAuthButton onPress={login} name="facebook" />
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
  absolute: {
    position: 'absolute',
    height: 84,
    width: '100%',
  },
});

export default connect(null, mapDispatch)(ChooseAuthScreen);
