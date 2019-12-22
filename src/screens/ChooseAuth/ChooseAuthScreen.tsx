import React, { FC } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import Text from '../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';

const ChooseAuthScreen: FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <ScreenWrapper>
      <View style={ChooseAuthScreenStyles.container}>
        <Text>{t('hello')}</Text>
        <Button
          title="Change language"
          onPress={() =>
            i18n.changeLanguage(i18n.language === 'en' ? 'hu' : 'en')
          }
        />
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
