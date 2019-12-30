import React, { FC } from 'react';
import Text from 'components/Text/Text';
import TabScreenWrapper from 'components/TabScreenWrapper/TabScreenWrapper';

const VendorsScreen: FC = () => (
  <TabScreenWrapper title="general.vendors">
    <Text>Vendors</Text>
  </TabScreenWrapper>
);

export default VendorsScreen;
