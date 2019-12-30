import React, { FC, useEffect, useState } from 'react';
import ScreenWrapper from 'components/ScreenWrapper/ScreenWrapper';
import ScrollView from 'components/ScrollView/ScrollView';
import { View } from 'react-native';
import TopBar from 'components/TopBar/TopBar';
import { useTranslation } from 'react-i18next';
import { Navigation } from 'react-native-navigation';

const TabScreenWrapper: FC<any> = ({ children, title }) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [topBar, setTopBarHeight] = useState(0);
  const { t } = useTranslation();
  useEffect(() => {
    const getConstants = async () => {
      const constants = await Navigation.constants();

      setTopBarHeight(constants.topBarHeight);
      setStatusBarHeight(constants.statusBarHeight);
    };

    getConstants();
  }, []);

  return (
    <ScreenWrapper>
      <ScrollView>
        <View style={{ height: statusBarHeight + topBar }} />
        {children}
      </ScrollView>
      <TopBar noIcons currentStack="" title={t(title)} />
    </ScreenWrapper>
  );
};

export default TabScreenWrapper;
