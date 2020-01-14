import React, { FC } from 'react';
import ScrollView from 'components/ScrollView/ScrollView';
import MoreProfileSection from 'screens/More/MoreProfileSection/More.ProfileSection';
import MoreTabs from 'screens/More/MoreTabs/MoreTabs';

const MoreScreen: FC = () => (
  <ScrollView>
    <MoreProfileSection />
    <MoreTabs />
  </ScrollView>
);

export default MoreScreen;
