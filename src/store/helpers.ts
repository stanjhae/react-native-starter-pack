import {
  AccessToken,
  GraphRequest,
  GraphRequestManager,
  LoginManager,
} from 'react-native-fbsdk';
import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { Dispatch } from 'store/index';
import storage from '@react-native-firebase/storage';
import { pushScreen } from 'navigation/navigation.actions';
import i18next from 'i18next';
import goToMainApp from 'utils/goToMainApp';

export const facebookLogin = async (): Promise<any> => {
  const res = await LoginManager.logInWithPermissions([
    'public_profile',
    'email',
  ]);

  if (res.isCancelled) {
    return false;
  } else {
    return await AccessToken.getCurrentAccessToken();
  }
};

export const facebookRequestUser = async (): Promise<any> => {
  return new Promise((resolve, reject) => {
    const infoRequest = new GraphRequest(
      '/v4.0/me?fields=id,name,email,first_name,last_name,picture.width(200).height(200)',
      null,
      (error, result) => {
        if (error) {
          console.log('Error fetching data: ' + error.toString());
          reject(error);
        } else {
          resolve(result);
        }
      },
    );

    new GraphRequestManager().addRequest(infoRequest).start();
  });
};

export const setUserData = (uid: any, user: any): Promise<any> => {
  return new Promise(resolve => {
    firestore()
      .collection('users')
      .doc(uid)
      .set({ ...user, uid: uid })
      .then(() => {
        resolve();
      });
  });
};

export const getUserData = (response: any): Promise<any> => {
  return new Promise(resolve => {
    firestore()
      .collection('users')
      .doc(response.user.uid)
      .get()
      .then(res => {
        resolve(res.data());
      });
  });
};

export const authenticateWithPassword = async (
  cred: any,
  dispatch: Dispatch,
) => {
  const { email, password } = cred;

  auth()
    .fetchSignInMethodsForEmail(email)
    .then((method: any) => {
      if (!method.length) {
        // Check if user exists
        Alert.alert(
          i18next.t('general.authenticationFailed'),
          `${i18next.t('general.noAccount')} ${email}.`,
        );
      } else if (method.includes('password')) {
        // If user has a password, log them in
        auth()
          .signInWithEmailAndPassword(email, password)
          .then(response => {
            getUserData(response).then(usr => {
              dispatch.users.updateUserSuccess({
                ...usr,
                emailVerified: response.user.emailVerified,
              });
              goToMainApp();
            });
          })
          .catch(error => {
            Alert.alert('Authentication failed', error.code);
          });
      } else if (method.includes('facebook.com')) {
        // If user has a facebook account, log them in with facebook.
        //TODO: This should be handled elsewhere
        Alert.alert(
          i18next.t('alerts.accountWasCreatedWithFacebook'),
          `${i18next.t('alerts.signInWithFacebookToSetPassword')}${email}`,
          [
            {
              text: 'Continue with facebook',
              onPress: () => {
                authenticateWithFacebook(dispatch).then(() => {
                  // If facebook login is successful, prompt to update password.
                  Alert.prompt(
                    'Set password',
                    'We noticed your account does not have a password. Will you like to set one?',
                    pass => {
                      // Create credential for firebase
                      const credential = auth.EmailAuthProvider.credential(
                        email,
                        pass,
                      );

                      // Link the password.
                      auth()
                        .currentUser?.linkWithCredential(credential)
                        .then(() => {
                          Alert.alert('Password set successfully');
                        });
                    },
                  );
                });
              },
            },
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
          ],
        );
      }
    })
    .catch(error => {
      console.warn('error', error);
    });
};

export const authenticateWithFacebook = async (
  dispatch: Dispatch,
): Promise<any> => {
  return new Promise(async resolve => {
    // Get access token from facebook
    const data = await facebookLogin();
    if (!data) {
      return false;
    }
    const { accessToken } = data;
    // Convert to credential for firebase
    const credential = auth.FacebookAuthProvider.credential(accessToken);

    // Get facebook user details.
    const result = await facebookRequestUser();
    if (!result?.email) {
      Alert.alert('This facebook account has no email associated with it');
    }
    const user = {
      email: result.email,
      firstName: result.first_name,
      lastName: result.last_name,
      facebookId: result.id,
      avatar: result.picture.data.url,
    };

    // Check to see if the user exists in our database
    //TODO: Improve this function
    auth()
      .fetchSignInMethodsForEmail(user.email)
      .then(methods => {
        if (!methods.length) {
          // User does not exist. So we create user.
          auth()
            .signInWithCredential(credential)
            .then(response => {
              setUserData(response.user.uid, user).then(() => {
                dispatch.users.updateUserSuccess({
                  ...user,
                  uid: response.user.uid,
                });
                response.user.sendEmailVerification().then(null);
              });
            });
        } else if (methods.length === 1 && methods.includes('password')) {
          // User exists but account not linked to facebook. Request password.
          Alert.prompt(
            'Account already exists',
            `Please input the password for ${user.email}`,
            pass => {
              auth()
                .signInWithEmailAndPassword(user.email, pass)
                .then(function(usr) {
                  // Facebook account successfully linked to the existing Firebase user.
                  usr.user.linkWithCredential(credential).then(() => {
                    getUserData(usr).then(userr => {
                      dispatch.users.updateUserSuccess({
                        ...userr,
                        emailVerified: usr.user.emailVerified,
                      });
                      pushScreen('ChooseAuthStack', 'ProfileScreen');
                    });
                  });
                });
              return;
            },
          );
        } else {
          // User exist and has facebook linked. So we get the user.
          auth()
            .signInWithCredential(credential)
            .then(response => {
              getUserData(response).then(usr => {
                dispatch.users.updateUserSuccess({
                  ...usr,
                  emailVerified: response.user.emailVerified,
                });
                pushScreen('ChooseAuthStack', 'ProfileScreen');
                resolve();
              });
            });
        }
      });
  });
};

//TODO expand to handle more than just profileImage
export const firebaseImageUpload = (payload: any, dispatch: Dispatch) => {
  storage()
    .ref('User avatars')
    .child(`${payload.uid}.jpeg`)
    .putString(payload.avatar, 'base64', { contentType: 'image/jpeg' })
    .then(() => {
      storage()
        .ref('User avatars')
        .child(`${payload.uid}.jpeg`)
        .getDownloadURL()
        .then(url => {
          firestore()
            .collection('users')
            .doc(payload.uid)
            .update({ avatar: url })
            .then(() => {
              dispatch.users.updateUserSuccess(payload);
            });
        });
    });
};
