import React, { FC } from 'react';
import ScrollView from 'components/ScrollView/ScrollView';
import Tab from 'components/Tab/Tab';
import { Dispatch, RootState } from 'store/index';
import { connect } from 'react-redux';

const SettingsScreen: FC<ReturnType<typeof mapDispatch> &
  ReturnType<typeof mapState>> = ({ user: { email }, forgotPassword }) => {
  const handleForgotPassword = () => {
    forgotPassword(email);
  };
  return (
    <ScrollView>
      <Tab
        isFirst
        screenToPush="ChangePassword"
        title="general.changePassword"
      />
      <Tab onPress={handleForgotPassword} title="forgotPassword.tabTitle" />
    </ScrollView>
  );
};

const mapState = (state: RootState) => ({
  user: state.users,
});

const mapDispatch = (dispatch: Dispatch) => ({
  forgotPassword: (email: string) => dispatch.users.forgotPassword(email),
});

export default connect(mapState, mapDispatch as Dispatch)(SettingsScreen);
