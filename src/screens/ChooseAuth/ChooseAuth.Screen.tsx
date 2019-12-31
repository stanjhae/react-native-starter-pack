import React, { FC, useEffect } from 'react';
import Text from '../../components/Text/Text';
import { StyleSheet, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import OtherText from 'components/OtherText/OtherText';
import ChooseAuthButton from './ChooseAuth.Button';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import { mainAppColor } from 'constants/colors';
import SplashScreen from 'react-native-splash-screen';
import {
  onPressLogin,
  onPressSignUp,
} from 'screens/ChooseAuth/ChooseAuth.functions';

const ChooseAuthScreen: FC<ReturnType<typeof mapDispatch>> = ({ login }) => {
  const { t } = useTranslation();

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <View style={ChooseAuthScreenStyles.container}>
      <ChooseAuthButton onPress={onPressLogin} name="logIn" />
      <ChooseAuthButton onPress={login} name="facebook" />
      <Text onPress={onPressSignUp}>
        {t('chooseAuthScreen.dontHaveAnAccount')}&nbsp;&nbsp;
        <OtherText color={mainAppColor}>{t('general.signUp')}</OtherText>
      </Text>
    </View>
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

const mapDispatch = (dispatch: Dispatch) => ({
  login: () => dispatch.users.facebookLogin(),
});

export default connect(null, mapDispatch)(ChooseAuthScreen);
