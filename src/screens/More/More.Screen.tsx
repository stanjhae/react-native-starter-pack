import React, { FC } from 'react';
import { Button } from 'react-native';
import { pushScreen } from 'navigation/navigation.actions';
import ScrollView from 'components/ScrollView/ScrollView';

const MoreScreen: FC = () => (
  <ScrollView>
    <Button
      title="Profile"
      onPress={() =>
        pushScreen('ProfileStack', 'ProfileScreen', 'general.profile', {}, true)
      }
    />
  </ScrollView>
);

export default MoreScreen;
