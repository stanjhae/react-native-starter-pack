import React, { FC, memo, ReactElement, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'components/Icon/Icon';
import { useDarkModeContext } from 'react-native-dark-mode';
import { borderBottomColors } from 'constants/colors';
import Text from 'components/Text/Text';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import { pushScreen } from 'navigation/navigation.actions';
import { useTranslation } from 'react-i18next';
import TabStyles from 'components/Tab/Tab.Styles';

export interface TabProps {
  onPress?: () => void;
  screenToPush?: string;
  title: string;
  icon?: string;
  isFirst?: boolean;
  children?: ReactElement;
}

const Tab: FC<TabProps> = ({
  onPress,
  screenToPush,
  title,
  icon,
  isFirst,
  children,
}) => {
  const borderBottomColor = borderBottomColors[useDarkModeContext()];
  const { t } = useTranslation();

  useEffect(() => {}, [children]);
  return (
    <TouchableOpacity
      onPress={
        onPress
          ? onPress
          : screenToPush
          ? () =>
              pushScreen(
                'ProfileStack',
                `${screenToPush}Screen` || '',
                title || '',
              )
          : undefined
      }
      style={[
        TabStyles.container,
        { borderBottomColor, marginTop: isFirst ? 25 : 0 },
      ]}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          marginRight: screenToPush ? 10 : 0,
        }}>
        {icon ? <Icon style={{ marginRight: 20 }} icon={icon} /> : null}
        <View style={TabStyles.tabNameContainer}>
          <Text style={TabStyles.tabName}>{t(title || '')}</Text>
        </View>
        {children}
      </View>
      {screenToPush ? (
        <Icon size={18} customTintColor="#333333" icon="rightAngle" />
      ) : null}
    </TouchableOpacity>
  );
};

export default memo(Tab);
