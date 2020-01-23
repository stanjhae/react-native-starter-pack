import React, { FC } from 'react';
import ScrollView from 'components/ScrollView/ScrollView';
import MoreProfileSection from 'screens/More/MoreProfileSection/MoreProfileSection';
import MoreTabs from 'screens/More/MoreTabs/MoreTabs';

const MoreScreen: FC = () => (
  <ScrollView>
    <MoreProfileSection />
    <MoreTabs />
  </ScrollView>
);

export default MoreScreen;
