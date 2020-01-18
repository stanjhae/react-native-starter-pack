import { ActionSheetIOS, Alert, Platform } from 'react-native';
import { translate } from 'utils/utils.functions';
import {
  removeProfileImage,
  showFullScreenImage,
  uploadProfileImage,
} from 'screens/More/MoreProfileSection/MoreProfileSection.Functions';

const translateOption = (text: string): string =>
  translate(`moreScreen.profileSection.image.${text}`);

export const showImageActionSheet = (
  callBack: (image: string) => void,
): void => {
  if (Platform.OS === 'ios') {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [
          translateOption('cancel'),
          translateOption('viewPhoto'),
          translateOption('chooseFromLibrary'),
          translateOption('takeAPhoto'),
          translateOption('removePhoto'),
        ],
        cancelButtonIndex: 0,
        destructiveButtonIndex: 4,
      },
      buttonIndex => {
        switch (buttonIndex) {
          case 1: {
            showFullScreenImage();
            break;
          }
          case 2: {
            uploadProfileImage(callBack);
            break;
          }
          case 3: {
            Alert.alert('Take a photo');
            break;
          }
          case 4: {
            removeProfileImage();
            break;
          }
        }
      },
    );
  }
};
