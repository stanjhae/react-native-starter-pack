import React, { FC } from 'react';
import moreTabs from 'screens/More/MoreTabs/MoreTabs.constants';
import Tab from 'components/Tab/Tab';

const MoreTabs: FC = () => (
  <>
    {moreTabs.map(({ title, screenToPush, onPress, icon }) => (
      <Tab
        icon={icon}
        key={icon}
        title={title}
        screenToPush={screenToPush}
        onPress={onPress}
      />
    ))}
  </>
);

export default MoreTabs;
