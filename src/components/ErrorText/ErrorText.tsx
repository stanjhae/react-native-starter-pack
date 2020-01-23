import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { errorColor } from 'constants/colors';
import { mediumFont } from 'constants/constants';
import { useTranslation } from 'react-i18next';

interface ErrorTextProps {
  error: string;
}

const ErrorText: FC<ErrorTextProps> = ({ error }) => {
  const { t } = useTranslation();
  return <Text style={ErrorTextStyles.errorText}>{t(error)}</Text>;
};

const ErrorTextStyles = StyleSheet.create({
  errorText: {
    marginTop: 10,
    marginBottom: 10,
    color: errorColor,
    fontFamily: mediumFont,
  },
});

export default ErrorText;
