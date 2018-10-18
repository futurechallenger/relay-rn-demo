// @flow

import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import { RelayDemoScreen } from './RelayDemoScreen';
import { NoRelayScreen } from './NoRelayScreen';
import PersonScreen from './PersonScreen';

const RelayStack = createStackNavigator({
  AllPeople: { screen: RelayDemoScreen },
  Person: { screen: PersonScreen },
});

export default createBottomTabNavigator({
  Relay: RelayStack,
  Normal: NoRelayScreen,
});
