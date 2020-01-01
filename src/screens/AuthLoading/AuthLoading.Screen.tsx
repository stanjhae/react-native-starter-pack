import React, { FC, useEffect } from 'react';
import Text from '../../components/Text/Text';
import { Navigation } from 'react-native-navigation';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';
import goToMainApp from 'utils/goToMainApp';
import {setRoot} from 'utils/utils.functions';

let update = false;

const mapDispatch = (dispatch: Dispatch) => ({
  updateUserSuccess: (payload: any) =>
    dispatch.users.updateUserSuccess(payload),
  logout: () => dispatch.users.logout(),
});

const AuthLoadingScreen: FC<ReturnType<typeof mapDispatch>> = ({
  updateUserSuccess,
  logout,
}) => {
  useEffect(() => {
    //TODO: Optimize this function
    const onAuthStateChanged = async (response: any) => {
      await auth().currentUser?.reload();
      if (update) {
        if (response) {
          const user = await firestore()
            .collection('users')
            .doc(response.uid)
            .get();
          if (user.exists) {
            updateUserSuccess({
              ...user.data(),
              emailVerified: response.emailVerified,
            });
            goToMainApp();
          } else {
          }
        } else {
          logout();
          setRoot('ChooseAuthStack', 'ChooseAuthScreen');
        }
      } else {
        update = true;
        if (!response) {
          setRoot('ChooseAuthStack', 'ChooseAuthScreen');
        }
      }
    };

    return auth().onAuthStateChanged(onAuthStateChanged);
  });

  return (
    <ScreenWrapper>
      <Text>AuthLoading screen</Text>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(AuthLoadingScreen);
