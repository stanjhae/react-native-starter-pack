import React, { FC, useCallback, useEffect } from 'react';
import ScrollView from 'components/ScrollView/ScrollView';
import TabWithInput from 'components/TabWithInput/TabWithInput';
import TabWithInfo from 'components/TabWIthInfo/TabWithInfo';
import { Dispatch, RootState } from 'store/index';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { profileSchema } from 'utils/validationSchema';
import BottomButton from 'components/BottomButton/BottomButton';
import { invalidForm } from 'utils/utils.functions';
import { popScreen } from 'navigation/navigation.actions';

const MeScreen: FC<ReturnType<typeof mapState> &
  ReturnType<typeof mapDispatch>> = ({ user, updateUser }) => {
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

  const handleUpdate = useCallback(
    values => {
      updateUser(values).then(() => {
        popScreen('ProfileStack');
      });
    },
    [updateUser],
  );

  useEffect(() => {
    invalidForm(formState.isSubmitted, errors);
    register('firstName');
    register('lastName');
    register('telephone');
    register('uid');
  }, [errors, formState.isSubmitted, register]);

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

  return (
    <ScrollView>
      <TabWithInput
        error={errors.firstName?.message}
        textContentType="givenName"
        isFirst
        defaultValue={user.firstName}
        autoCompleteType="name"
        title="general.firstName"
        onChangeText={setFirstName}
        onBlur={handleFirstNameValidation}
      />
      <TabWithInput
        error={errors.lastName?.message}
        defaultValue={user.lastName}
        autoCompleteType="name"
        textContentType="familyName"
        title="general.lastName"
        onChangeText={setLastName}
        onBlur={handleLastNameValidation}
      />
      <TabWithInput
        error={errors.telephone?.message}
        defaultValue={user.telephone.toString()}
        autoCompleteType="tel"
        textContentType="telephoneNumber"
        keyboardType="phone-pad"
        title="general.phoneNumber"
        onChangeText={setTelephone}
        onBlur={handleTelephoneValidation}
      />
      <TabWithInfo screenToPush="ChangeEmail" title="Email" info={user.email} />

      <BottomButton
        disabled={!formState.dirty}
        buttonName="done"
        onPress={handleSubmit(handleUpdate)}
      />
    </ScrollView>
  );
};

const mapState = (state: RootState) => ({
  user: state.users,
});

const mapDispatch = (dispatch: Dispatch) => ({
  updateUser: (payload: any) => dispatch.users.updateUser(payload),
});

export default connect(mapState, mapDispatch as Dispatch)(MeScreen);
