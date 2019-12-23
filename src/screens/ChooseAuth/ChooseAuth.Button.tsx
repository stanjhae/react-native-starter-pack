import React, { FC } from 'react';
import {
  DynamicStyleSheet,
  DynamicValue,
  useDynamicStyleSheet,
} from 'react-native-dark-mode';
import constants, { boldFont } from '../../constants/constants';
import Text from '../../components/Text/Text';
import { useTranslation } from 'react-i18next';
import TouchableOpacity from '../../components/ToucbableOpacity/TouchableOpacity';

interface ChooseAuthButtonProps {
  name: string;
  onPress: any;
  screenToPush: string;
}

const ChooseAuthButton: FC<ChooseAuthButtonProps> = ({ name, onPress }) => {
  const { t } = useTranslation();
  const ChooseAuthButtonStyles = useDynamicStyleSheet(styles);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        ChooseAuthButtonStyles.container,
        { maxHeight: 60, maxWidth: 290 },
      ]}>
      <Text style={ChooseAuthButtonStyles.text}>{t(`general.${name}`)}</Text>
    </TouchableOpacity>
  );
};

const styles = new DynamicStyleSheet({
  container: {
    height: constants.height * 0.08,
    width: constants.width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: new DynamicValue('#E9ECEF', '#424242'),
    borderRadius: 30,
  },
  text: {
    fontFamily: boldFont,
    letterSpacing: 0.5,
  },
});

export default ChooseAuthButton;
