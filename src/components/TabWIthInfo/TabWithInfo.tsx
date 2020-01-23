import React, { FC } from 'react';
import Tab, { TabProps } from 'components/Tab/Tab';
import { View } from 'react-native';
import Text from 'components/Text/Text';
import TabWithInfoStyles from 'components/TabWIthInfo/TabWithInfoStyles';

interface TabWithInfoProps {
  info: string;
}

const TabWithInfo: FC<TabProps & TabWithInfoProps> = ({
  info,
  title,
  screenToPush,
}) => (
  <Tab screenToPush={screenToPush} title={title}>
    <View style={TabWithInfoStyles.container}>
      <Text numberOfLines={1} style={TabWithInfoStyles.info}>
        {info}
      </Text>
    </View>
  </Tab>
);

export default TabWithInfo;
