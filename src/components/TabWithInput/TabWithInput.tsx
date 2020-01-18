import React, { FC } from 'react';
import Tab, { TabProps } from 'components/Tab/Tab';
import { TextInput, TextInputProps, View } from 'react-native';
import TabWithInputStyles from 'components/TabWithInput/TabWithInputStyles';
import { useTranslation } from 'react-i18next';
import ErrorText from 'components/ErrorText/ErrorText';

interface TabWithInputProps extends TabProps, TextInputProps {
  onChangeText: (text: string) => void;
  error: string;
}

const TabWithInput: FC<TabWithInputProps> = ({
  error,
  title,
  onPress,
  isFirst,
  ...props
}) => {
  const { t } = useTranslation();
  return (
    <>
      <Tab isFirst={isFirst} onPress={onPress} title={title}>
        <View style={{ flex: 1 }}>
          <TextInput
            {...props}
            placeholder={t(title || '')}
            style={TabWithInputStyles.textInputContainer}
          />
        </View>
      </Tab>
      {error && <ErrorText error={error} />}
    </>
  );
};

export default TabWithInput;
