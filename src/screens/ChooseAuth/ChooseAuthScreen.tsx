import React, { FC } from 'react';
import { Button, SafeAreaView } from 'react-native';
import { pushScreen } from '../../navigation/navigation.functions';
import { useDarkMode, eventEmitter } from 'react-native-dark-mode';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';

eventEmitter.on('currentModeChanged', newMode => {
  console.log('Switched to', newMode, 'mode');
});

const ChooseAuthScreen: FC = () => {
  const isDarkMode = useDarkMode();
  console.log(isDarkMode);
  return (
    <ScreenWrapper>
      <Button
        title="Login"
        onPress={() => pushScreen('ChooseAuthStack', 'LogInScreen')}
      />
      <Button
        title="Sign up"
        onPress={() => pushScreen('ChooseAuthStack', 'SignUpScreen')}
      />
    </ScreenWrapper>
  );
};

export default ChooseAuthScreen;
