import i18next from 'i18next';
import { Navigation } from 'react-native-navigation';

export const translate = (text: string): string => i18next.t(text);

export const getConstants = async (
  setTopBarHeight: any,
  setStatusBarHeight: any,
) => {
  const constants = await Navigation.constants();

  setTopBarHeight(constants.topBarHeight);
  setStatusBarHeight(constants.statusBarHeight);
};
