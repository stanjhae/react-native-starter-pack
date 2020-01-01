import React, { FC } from 'react';
import { View } from 'react-native';
import TopBarStyles from 'components/TopBar/TopBar.styles';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import Text from 'components/Text/Text';
import { useTranslation } from 'react-i18next';
import { useDarkModeContext } from 'react-native-dark-mode';
import { headerColors, headerModalColors } from 'constants/colors';
import Icon from 'components/Icon/Icon';
import Platform from 'utils/Platform';
import { dismissModal, popScreen } from 'navigation/navigation.actions';

interface TopBarProps {
  onPressLeftButton?: () => void;
  onPressRightButton?: () => void;
  leftIcon?: string;
  rightIcon?: string;
  title: string;
  iconSize?: number;
  leftIconSize?: number;
  rightIconSize?: number;
  modal?: boolean;
  currentStack: string;
  noIcons?: boolean;
}

const TopBar: FC<TopBarProps> = ({
  onPressLeftButton,
  onPressRightButton,
  title,
  leftIcon,
  rightIcon,
  leftIconSize,
  iconSize,
  rightIconSize,
  modal,
  currentStack,
  noIcons,
}) => {
  const mode = useDarkModeContext();
  const { t } = useTranslation();
  return (
    <View
      style={[
        TopBarStyles.container,
        {
          backgroundColor:
            modal && Platform.isIOS()
              ? headerModalColors[mode].backgroundColor
              : headerColors[mode].backgroundColor,
        },
        { height: modal && Platform.isIOS13() ? 60 : 44 },
        { borderBottomColor: headerColors[mode].borderBottomColor },
      ]}>
      <TouchableOpacity
        onPress={
          noIcons
            ? null
            : onPressLeftButton
            ? onPressLeftButton
            : modal
            ? () => dismissModal(currentStack)
            : () => popScreen(currentStack)
        }
        style={[TopBarStyles.buttonContainer, { alignItems: 'flex-end' }]}>
        {!noIcons ? (
          <Icon
            size={leftIconSize || iconSize}
            icon={leftIcon || modal ? 'cancel' : 'back'}
          />
        ) : null}
      </TouchableOpacity>
      <View style={TopBarStyles.titleContainer}>
        <Text style={TopBarStyles.title}>{t(title)}</Text>
      </View>
      <TouchableOpacity
        onPress={noIcons ? null : onPressRightButton}
        style={[TopBarStyles.buttonContainer, { alignItems: 'flex-start' }]}>
        {!noIcons && rightIcon ? (
          <Icon size={rightIconSize || iconSize} icon={rightIcon} />
        ) : null}
      </TouchableOpacity>
    </View>
  );
};

TopBar.defaultProps = {
  noIcons: false,
};

export default TopBar;
