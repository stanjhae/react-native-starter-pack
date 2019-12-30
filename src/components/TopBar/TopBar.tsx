import React, { FC, useEffect, useState } from 'react';
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
import { Navigation } from 'react-native-navigation';
import { BlurView } from '@react-native-community/blur';
import { getConstants } from 'utils/utils.functions';
import { Context } from 'components/ComponentProvider/ComponentProvider';

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
  const [topBar, setTopBarHeight] = useState(0);
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  useEffect(() => {
    getConstants(setTopBarHeight, setStatusBarHeight);
  }, []);

  return (
    <BlurView
      blurType="regular"
      style={{ position: 'absolute', zIndex: 1, marginBottom: 200 }}>
      <Context.Consumer>
        {context => (
          <>
            {console.log('context', context)}
            <View style={{ height: statusBarHeight }} />
            <View
              style={[
                TopBarStyles.container,
                { height: modal && Platform.isIOS13() ? 60 : topBar },
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
                style={[
                  TopBarStyles.buttonContainer,
                  { alignItems: 'flex-end' },
                ]}>
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
                style={[
                  TopBarStyles.buttonContainer,
                  { alignItems: 'flex-start' },
                ]}>
                {!noIcons && rightIcon ? (
                  <Icon size={rightIconSize || iconSize} icon={rightIcon} />
                ) : null}
              </TouchableOpacity>
            </View>
          </>
        )}
      </Context.Consumer>
    </BlurView>
  );
};

TopBar.defaultProps = {
  noIcons: false,
};

export default TopBar;
