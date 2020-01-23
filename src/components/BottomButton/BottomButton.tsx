import React, { FC } from 'react';
import TouchableOpacity from '../ToucbableOpacity/TouchableOpacity';
import { StyleSheet } from 'react-native';
import constants, { boldFont } from '../../constants/constants';
import OtherText from '../OtherText/OtherText';
import LinearGradient from 'react-native-linear-gradient';
import { useTranslation } from 'react-i18next';
import { buttonColor } from 'constants/colors';

interface BottomButtonProps {
  buttonName: string;
  onPress: any;
}

const BottomButton: FC<BottomButtonProps> = ({ buttonName, onPress }) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={BottomButtonStyles.buttonContainer}
      onPress={onPress}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={buttonColor}
        style={BottomButtonStyles.container}>
        <OtherText style={{ fontFamily: boldFont }} color="white">
          {t(`general.${buttonName}`)}
        </OtherText>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const BottomButtonStyles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    maxHeight: 60,
    minHeight: 55,
    height: constants.height * 0.08,
    width: constants.width * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
});

export default BottomButton;
