import React, { FC, useCallback, useEffect, useState } from 'react';
import Text from 'components/Text/Text';
import { Alert, Button, ScrollView, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch, RootState } from 'store/index';
import { Image } from 'react-native';
import { useForm } from 'react-hook-form';
import ImagePicker from 'react-native-image-crop-picker';
import { profileSchema } from 'utils/validationSchema';
import TopBar from 'components/TopBar/TopBar';

const mapState = (state: RootState) => ({
  user: state.users,
});
const mapDispatch = (dispatch: Dispatch) => ({
  verifyEmail: () => dispatch.users.verifyEmail(),
  updateUser: (payload: any) => dispatch.users.updateUser(payload),
  updateAvatar: (payload: any) => dispatch.users.updateProfileImage(payload),
  verifyCurrentPassword: (payload: any) =>
    dispatch.users.verifyCurrentPassword(payload),
  forgotPassword: (email: string) => dispatch.users.forgotPassword(email),
  logout: () => dispatch.users.logout(),
});

interface ProfileScreenProps {
  currentStack: string;
}

const ProfileScreen: FC<ProfileScreenProps &
  ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>> = ({
  user,
  verifyEmail,
  updateUser,
  updateAvatar,
  verifyCurrentPassword,
  forgotPassword,
  logout,
  currentStack,
}) => {
  const [avatar, setAvatar] = useState('');

  const {
    register,
    handleSubmit,
    setValue,
    errors,
    formState,
    triggerValidation,
  } = useForm({
    defaultValues: user,
    validationSchema: profileSchema,
  });

  useEffect(() => {
    register('email');
    register('firstName');
    register('lastName');
    register('telephone');
    register('uid');
  }, [register]);

  //TODO: Improve implementation
  const setFirstName = useCallback(
    value => {
      setValue('firstName', value);
    },
    [setValue],
  );

  const setLastName = useCallback(
    value => {
      setValue('lastName', value);
    },
    [setValue],
  );

  const setTelephone = useCallback(
    value => {
      setValue('telephone', value);
    },
    [setValue],
  );

  const handleFirstNameValidation = useCallback(() => {
    triggerValidation('firstName').then(null);
  }, [triggerValidation]);

  const handleLastNameValidation = useCallback(() => {
    triggerValidation('firstName').then(null);
  }, [triggerValidation]);

  const handleTelephoneValidation = useCallback(() => {
    triggerValidation('telephone').then(null);
  }, [triggerValidation]);

  const handleUpload = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      //TODO: Fix path and data reference
      setAvatar(image.path);
      updateAvatar({ uid: user.uid, avatar: image.data }).then(null);
    });
  }, [updateAvatar, user.uid]);

  const handleUpdate = useCallback(
    values => {
      updateUser(values).then(null);
    },
    [updateUser],
  );

  const promptUpdatePassword = () => {
    Alert.prompt('Update password', 'Please enter current password.', pass => {
      verifyCurrentPassword({ email: user.email, password: pass }).then();
    });
  };

  const promptForgotPassword = () => {
    forgotPassword(user.email).then(null);
  };

  return (
    <>
      <TopBar currentStack={currentStack} title="general.profile" />
      <ScrollView>
        {(!!avatar || !!user.avatar) && (
          <Image
            source={{ uri: avatar || user.avatar }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Button title={'Upload Image'} onPress={handleUpload} />
        <TextInput
          placeholder={'firstName'}
          defaultValue={user.firstName}
          onChangeText={setFirstName}
          onBlur={handleFirstNameValidation}
        />
        {errors.firstName && <Text>{errors.firstName.message}</Text>}
        <TextInput
          placeholder={'lastName'}
          defaultValue={user.lastName}
          onChangeText={setLastName}
          onBlur={handleLastNameValidation}
        />
        {errors.lastName && <Text>{errors.lastName.message}</Text>}
        <TextInput
          placeholder={'telephone'}
          defaultValue={user.telephone.toString()}
          onChangeText={setTelephone}
          onBlur={handleTelephoneValidation}
        />
        {errors.telephone && <Text>{errors.telephone.message}</Text>}

        <Text>
          email: {user.email} Verified: {user.emailVerified.toString()}
        </Text>
        {!user.emailVerified && (
          <Button title={'Verify Email'} onPress={verifyEmail} />
        )}
        {formState.dirty && (
          <Button title={'Update'} onPress={handleSubmit(handleUpdate)} />
        )}
        <Button title={'Update Password'} onPress={promptUpdatePassword} />
        <Button title={'Forgot Password'} onPress={promptForgotPassword} />
        <Button title={'Log out'} onPress={logout} />
      </ScrollView>
    </>
  );
};

export default connect(mapState, mapDispatch)(ProfileScreen);
