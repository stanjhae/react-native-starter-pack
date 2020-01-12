import { createModel } from '@rematch/core';
import { Dispatch } from 'src/store';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {
  authenticateWithFacebook,
  authenticateWithPassword,
  firebaseImageUpload,
} from 'store/helpers';
import {
  dismissModal,
  dismissOverlay,
  showOverlay,
} from 'navigation/navigation.actions';
import { Alert } from 'react-native';
import storage from '@react-native-firebase/storage';
import goToMainApp from 'utils/goToMainApp';
import { setRoot } from 'utils/utils.functions';

export type UsersState = {
  uid: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  telephone: number;
  emailVerified: boolean;
};

const initialState: UsersState = {
  uid: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  avatar: '',
  telephone: 0,
  emailVerified: false,
};

const model = {
  state: initialState,
  reducers: {
    updateUserSuccess: (state: UsersState, payload: any): UsersState => ({
      ...state,
      ...payload,
    }),
    logout: (state: UsersState): UsersState => ({
      ...state,
      ...initialState,
    }),
  },
  effects: (dispatch: Dispatch) => ({
    //TODO: Declare type
    signUp: (payload: any) => {
      showOverlay('ActionOverlay');
      auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(response => {
          delete payload.password;
          firestore()
            .collection('users')
            .doc(response.user.uid)
            .set({ ...payload, uid: response.user.uid })
            .then(() => {
              dispatch.users.updateUserSuccess({
                ...payload,
                uid: response.user.uid,
              });
              dismissOverlay('ActionOverlay');
              goToMainApp();
            });
        })
        .catch(error => {
          Alert.alert('An error has occurred', error.code);
        });
    },
    login: ({ email, password }: any) => {
      showOverlay('ActionOverlay');
      authenticateWithPassword({ email, password }, dispatch).then(() => {
        dismissOverlay('ActionOverlay');
      });
    },
    facebookLogin: async () => {
      authenticateWithFacebook(dispatch).then(() => {
        dismissOverlay('ActionOverlay');
      });
    },
    verifyCurrentPassword: async ({ email, password }: any) => {
      const credential = auth.EmailAuthProvider.credential(email, password);
      auth()
        .currentUser?.reauthenticateWithCredential(credential)
        .then(user => {
          //TODO: This should be handled elsewhere
          Alert.prompt(
            'Update password',
            'Please enter new password.',
            pass => {
              user.user.updatePassword(pass).then(() => {
                Alert.alert('Password updated successfully');
              });
            },
          );
        });
    },
    // setNewPassword: (password: string) => {
    //   auth().currentUser?.updatePassword(password).then(() => {
    //     Alert.alert('Password updated successfully');
    //   })
    // },
    forgotPassword: (email: string) => {
      //TODO: handle re authentication after password update
      auth()
        .sendPasswordResetEmail(email)
        .then(() => {
          dismissModal('ForgotPasswordModal');
          Alert.alert('Password reset link has been sent to your email');
        })
        .catch(error => {
          Alert.alert('An error has occurred', error.code);
        });
    },
    updateUser: (payload: any) => {
      firestore()
        .collection('users')
        .doc(payload.uid)
        .update(payload)
        .then(() => {
          dispatch.users.updateUserSuccess(payload);
        });
    },
    updateProfileImage: (payload: any) => {
      storage()
        .ref('User avatars')
        .child(`${payload.uid}.jpeg`)
        .delete()
        .then(() => {
          firebaseImageUpload(payload, dispatch);
        })
        .catch(() => {
          firebaseImageUpload(payload, dispatch);
        });
    },
    verifyEmail: () => {
      auth()
        .currentUser?.sendEmailVerification()
        .then(() => {
          Alert.alert('Verification link has been sent to your email');
        });
    },
    logout: () => {
      auth().signOut();
      setRoot('ChooseAuthStack', 'ChooseAuthScreen');
    },
  }),
};

export const users: typeof model = createModel(model);
