import React, { FC } from 'react';
import { useDarkModeContext } from 'react-native-dark-mode';
import constants, { boldFont } from 'constants/constants.ts';
import Text from 'components/Text/Text';
import { useTranslation } from 'react-i18next';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import { StyleSheet } from 'react-native';
import { chooseAuthButtonColors } from 'constants/colors';

interface ChooseAuthButtonProps {
  name: string;
  onPress: any;
}

const ChooseAuthButton: FC<ChooseAuthButtonProps> = ({ name, onPress }) => {
  const { t } = useTranslation();
  const currentMode = useDarkModeContext();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        ChooseAuthButtonStyles.container,
        { backgroundColor: chooseAuthButtonColors[currentMode] },
      ]}>
      <Text style={ChooseAuthButtonStyles.text}>{t(`general.${name}`)}</Text>
    </TouchableOpacity>
  );
};

const ChooseAuthButtonStyles = StyleSheet.create({
  container: {
    height: 62,
    width: constants.width * 0.7,
    maxWidth: 290,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 30,
  },
  text: {
    fontFamily: boldFont,
    letterSpacing: 0.5,
  },
});

export default ChooseAuthButton;
