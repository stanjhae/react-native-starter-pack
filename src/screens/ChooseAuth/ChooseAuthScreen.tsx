import React, { FC } from 'react';
import { Button, SafeAreaView } from 'react-native';
import { pushScreen } from '../../navigation/navigation.functions';

const ChooseAuthScreen: FC = () => (
  <SafeAreaView>
    <Button
      title="Login"
      onPress={() => pushScreen('ChooseAuthStack', 'LogInScreen')}
    />
    <Button
      title="Sign up"
      onPress={() => pushScreen('ChooseAuthStack', 'SignUpScreen')}
    />
  </SafeAreaView>
);

export default ChooseAuthScreen;
