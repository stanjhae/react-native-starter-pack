import React, { FC } from 'react';
import { Dispatch, RootState } from 'store/index';
import { connect } from 'react-redux';
import BottomButton from 'components/BottomButton/BottomButton';

type ChangeEmailScreenProps = ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>;

const ChangeEmailScreen: FC<ChangeEmailScreenProps> = ({
  emailVerified,
  verifyEmail,
}) => (
  <>
    {!emailVerified && (
      <BottomButton buttonName="verifyEmailAddress" onPress={verifyEmail} />
    )}
  </>
);

const mapState = (state: RootState) => ({
  emailVerified: state.users.emailVerified,
});

const mapDispatch = (dispatch: Dispatch) => ({
  verifyEmail: () => dispatch.users.verifyEmail(),
});

export default connect(mapState, mapDispatch as Dispatch)(ChangeEmailScreen);
