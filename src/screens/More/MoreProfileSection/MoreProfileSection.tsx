import React, { FC, useEffect, useState } from 'react';
import TouchableOpacity from 'components/ToucbableOpacity/TouchableOpacity';
import { Image, View } from 'react-native';
import MoreProfileSectionStyles from 'screens/More/MoreProfileSection/MoreProfileSection.Styles';
import Text from 'components/Text/Text';
import OtherText from 'components/OtherText/OtherText';
import { baseFontSize } from 'constants/constants';
import { RootState } from 'store/index';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {
  onPressProfile,
  showFullScreenImage,
} from 'screens/More/MoreProfileSection/MoreProfileSection.Functions';
import { showImageActionSheet } from 'screens/More/MoreProfileSection/MoreProfileSection.ActionSheet';

const MoreProfileSection: FC<ReturnType<typeof mapState>> = ({
  firstName,
  avatar,
}) => {
  const [profileImage, setProfileImage] = useState('');
  useEffect(() => {
    console.log('rendering');
  }, [avatar, profileImage]);
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      style={MoreProfileSectionStyles.profileSectionContainer}
      onPress={onPressProfile}>
      <TouchableOpacity
        onLongPress={showFullScreenImage}
        style={MoreProfileSectionStyles.profileIconContainer}
        onPress={() => showImageActionSheet(image => setProfileImage(image))}>
        <Image
          source={{ uri: profileImage || avatar || 'no-image' }}
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
