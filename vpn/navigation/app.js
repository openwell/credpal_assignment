import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import VPN from '../screens/VPN';

const screens = createSwitchNavigator({ Welcome, VPN });

export default createAppContainer(screens);
