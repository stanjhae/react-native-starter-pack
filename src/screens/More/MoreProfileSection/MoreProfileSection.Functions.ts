import ImagePicker from 'react-native-image-crop-picker';
import { store } from 'store/index';
import { pushScreen, showModal } from 'navigation/navigation.actions';
import Haptic from 'utils/Haptic';

export const onPressProfile = () => {
  pushScreen('ProfileStack', 'MeScreen', 'general.me');
};

export const removeProfileImage = () => {};

export const showFullScreenImage = () => {
  Haptic.impactMedium();
  showModal('FullScreenProfileImageScreen', 'FullScreenProfileImageScreen', '');
};

export const uploadProfileImage = (
  callBack: (image: string) => void,
  removeImage?: string,
) => {
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
    includeBase64: true,
  }).then(({ path, data }: any) => {
    callBack(path);
    //TODO: Fix path and data reference
    store.dispatch.users
      .updateProfileImage({
        uid: store.getState().users.uid,
        avatar: removeImage || data,
      })
      .then(null);
  });
};
