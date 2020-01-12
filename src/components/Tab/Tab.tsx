import React, { FC } from 'react';
import { View } from 'react-native';
import TabStyles from 'components/Tab/Tab.Styles';
import Icon from 'components/Icon/Icon';
import { useDarkModeContext } from 'react-native-dark-mode';
import { borderBottomColors } from 'constants/colors';
import Text from 'components/Text/Text';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import { pushScreen } from 'navigation/navigation.actions';
import { useTranslation } from 'react-i18next';

export interface MoreTabProps {
  onPress?: () => void;
  screenToPush?: string;
  title?: string;
  icon?: string;
}

const Tab: FC<MoreTabProps> = ({ onPress, screenToPush, title, icon }) => {
  const borderBottomColor = borderBottomColors[useDarkModeContext()];
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : () =>
              pushScreen(
                'ProfileStack',
                `${screenToPush}Screen` || '',
                title || '',
              )
      }
      style={[TabStyles.container, { borderBottomColor }]}>
      {icon ? <Icon style={{ marginRight: 20 }} icon={icon} /> : null}
      <View style={TabStyles.tabNameContainer}>
        <Text style={TabStyles.tabName}>{t(title || '')}</Text>
      </View>
      <Icon size={18} customTintColor="#333333" icon="rightAngle" />
    </TouchableOpacity>
  );
};

export default Tab;
