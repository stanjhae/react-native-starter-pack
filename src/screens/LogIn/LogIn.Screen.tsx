import React, { FC } from 'react';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import Text from '../../components/Text/Text';
import {ScrollView} from 'react-native';

const LogInScreen: FC<any> = () => {
  return (
    <ScreenWrapper>
      <ScrollView>
        <Text>LoginScreen</Text>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default LogInScreen;
