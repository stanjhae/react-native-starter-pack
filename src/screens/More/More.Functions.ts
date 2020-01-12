import { pushScreen } from 'navigation/navigation.actions';
import { ActionSheetIOS, Platform } from 'react-native';
import { translate } from 'utils/utils.functions';

export const onPressProfile = () => {
  pushScreen('ProfileStack', 'ProfileScreen', 'general.profile');
};

const translateOption = (text: string): string =>
  translate(`moreScreen.profileSection.image.${text}`);

export const showImageActionSheet = () => {
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
            alert('View photo');
            break;
          }
          case 2: {
            alert('Choose from library');
            break;
          }
          case 3: {
            alert('Take a photo');
            break;
          }
          case 3: {
            alert('Remove photo');
            break;
          }
        }
      },
    );
  }
};
