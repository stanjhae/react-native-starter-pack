import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import Text from 'components/Text/Text';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import OtherText from '../../components/OtherText/OtherText';
import ChooseAuthButton from './ChooseAuth.Button';
import { pushScreen } from 'navigation/navigation.actions';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';

const mapDispatch = (dispatch: Dispatch) => ({
  login: () => dispatch.users.facebookLogin(),
});

const ChooseAuthScreen: FC<ReturnType<typeof mapDispatch>> = ({ login }) => {
  const { t } = useTranslation();
  const navigate = (screenToPush: string) =>
    pushScreen('ChooseAuthStack', screenToPush);

  return (
    <ScreenWrapper>
      <View style={ChooseAuthScreenStyles.container}>
        <ChooseAuthButton
          onPress={() => navigate('LogInScreen')}
          name="logIn"
        />
        <ChooseAuthButton onPress={login} name="facebook" />
        <Text onPress={() => navigate('SignUpScreen')}>
          {t('chooseAuthScreen.dontHaveAnAccount')}&nbsp;&nbsp;
          <OtherText color="#007AFF">{t('general.signUp')}</OtherText>
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

export default connect(null, mapDispatch)(ChooseAuthScreen);
