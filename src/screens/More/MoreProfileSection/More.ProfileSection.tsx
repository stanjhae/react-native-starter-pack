import React, { FC, useEffect } from 'react';
import {
  onPressProfile,
  showImageActionSheet,
} from 'screens/More/More.Functions';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import { Image, View } from 'react-native';
import MoreProfileSectionStyles from 'screens/More/MoreProfileSection/More.ProfileSection.Styles';
import Text from 'components/Text/Text';
import OtherText from 'components/OtherText/OtherText';
import { baseFontSize } from 'constants/constants';
import { RootState } from 'store/index';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';

const MoreProfileSection: FC<ReturnType<typeof mapState>> = ({
  firstName,
  avatar,
}) => {
  useEffect(() => {}, []);
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={MoreProfileSectionStyles.profileSectionContainer}
      onPress={onPressProfile}>
      <TouchableOpacity
        style={MoreProfileSectionStyles.profileIconContainer}
        onPress={showImageActionSheet}>
        <Image
          source={{ uri: avatar || 'no-image' }}
          style={MoreProfileSectionStyles.profileIcon}
        />
      </TouchableOpacity>
      <View>
        <Text style={MoreProfileSectionStyles.name}>{firstName}</Text>
        <OtherText style={{ fontSize: baseFontSize - 2 }}>
          {t('moreScreen.profileSection.viewProfile')}
        </OtherText>
      </View>
    </TouchableOpacity>
  );
};

const mapState = (state: RootState) => ({
  firstName: state.users.firstName,
  avatar: state.users.avatar,
});

export default connect(mapState)(MoreProfileSection);
