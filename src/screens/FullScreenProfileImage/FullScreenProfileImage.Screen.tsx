import React, { FC } from 'react';
import { Image, View } from 'react-native';
import { RootState } from 'store/index';
import HeaderSpacing from 'components/HeaderSpacing/HeaderSpacing';
import { connect } from 'react-redux';

const FullScreenProfileImageScreen: FC<ReturnType<typeof mapState>> = ({
  avatar,
}) => (
  <View style={{ flex: 1 }}>
    <HeaderSpacing />
    <Image style={{ flex: 1 }} resizeMode="contain" source={{ uri: avatar }} />
  </View>
);

const mapState = (state: RootState) => ({
  avatar: state.users.avatar,
});

export default connect(mapState)(FullScreenProfileImageScreen);
