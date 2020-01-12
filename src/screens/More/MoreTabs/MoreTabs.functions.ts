import { store } from 'store/index';
import { ActionSheetIOS } from 'react-native';
import { translate } from 'utils/utils.functions';

export const onPressLogout = () => {
  ActionSheetIOS.showActionSheetWithOptions(
    {
      title: translate('moreScreen.logout.sheetTitle'),
      options: [translate('general.cancel'), translate('general.logout')],
      destructiveButtonIndex: 1,
      cancelButtonIndex: 0,
    },
    buttonIndex => {
      switch (buttonIndex) {
        case 1: {
          store.dispatch.users.logout();
          break;
        }
      }
    },
  );
};
