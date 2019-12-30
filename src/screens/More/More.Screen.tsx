import React, { FC } from 'react';
import Text from 'components/Text/Text';
import TabScreenWrapper from 'components/TabScreenWrapper/TabScreenWrapper';

const MoreScreen: FC = () => (
  <TabScreenWrapper title="general.profile">
    <Text>Profile</Text>
  </TabScreenWrapper>
);

export default MoreScreen;
