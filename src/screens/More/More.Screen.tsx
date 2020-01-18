import React, { FC } from 'react';
import ScrollView from 'components/ScrollView/ScrollView';
import MoreProfileSection from 'screens/More/MoreProfileSection/MoreProfileSection';
import MoreTabs from 'screens/More/MoreTabs/MoreTabs';
import { Button } from 'react-native';
import { pushScreen } from 'navigation/navigation.actions';

const MoreScreen: FC = () => (
  <ScrollView>
    <MoreProfileSection />
    <MoreTabs />
    <Button
      title="Former profile"
      onPress={() =>
        pushScreen('ProfileStack', 'ProfileScreen', 'general.profile')
      }
    />
  </ScrollView>
);

export default MoreScreen;
