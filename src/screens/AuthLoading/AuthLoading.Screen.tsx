import React, { FC, useEffect } from 'react';
import Text from '../../components/Text/Text';
import { Navigation } from 'react-native-navigation';
import ScreenWrapper from '../../components/ScreenWrapper/ScreenWrapper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { connect } from 'react-redux';
import { Dispatch } from 'store/index';

let update = false;

const setRoot = (screen: string) => {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'ChooseAuthStack',
        children: [
          {
            component: {
              options: {
                topBar: {
                  visible: false,
                },
              },
              name: screen,
            },
          },
        ],
      },
    },
  }).then(null);
};

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
            setRoot('ProfileScreen');
          } else {
          }
        } else {
          logout();
          setRoot('ChooseAuthScreen');
        }
      } else {
        update = true;
        if (!response) {
          setRoot('ChooseAuthScreen');
        }
      }
    };

    const userSubscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return userSubscriber;
  });

  return (
    <ScreenWrapper>
      <Text>AuthLoading screen</Text>
    </ScreenWrapper>
  );
};

export default connect(null, mapDispatch)(AuthLoadingScreen);
