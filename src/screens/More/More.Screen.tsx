import React, { FC } from 'react';
import TopBar from 'components/TopBar/TopBar';
import { Button } from 'react-native';
import { pushScreen } from 'navigation/navigation.actions';

const MoreScreen: FC = () => (
  <>
    <TopBar noIcons currentStack="" title="general.profile" />
    <Button
      title="Profile"
      onPress={() =>
        pushScreen('ProfileStack', 'ProfileScreen', 'general.profile', {}, true)
      }
    />
  </>
);

export default MoreScreen;
