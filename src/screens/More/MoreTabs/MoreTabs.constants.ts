import { MoreTabProps } from 'screens/../../../components/TabStyles/TabStyles';
import { onPressLogout } from 'screens/More/MoreTabs/MoreTabs.functions';

const moreTabs: MoreTabProps[] = [
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
