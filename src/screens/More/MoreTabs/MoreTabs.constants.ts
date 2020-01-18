import { onPressLogout } from 'screens/More/MoreTabs/MoreTabs.functions';
import { TabProps } from 'components/Tab/Tab';

const moreTabs: TabProps[] = [
  {
    title: 'general.settings',
    screenToPush: 'Settings',
    icon: 'settings',
  },
  {
    title: 'general.feedback',
    screenToPush: 'Feedback',
    icon: 'feedback',
  },
  {
    title: 'general.logout',
    onPress: onPressLogout,
    icon: 'logout',
  },
];

export default moreTabs;
