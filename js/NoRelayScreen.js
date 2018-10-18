// @flow

import React from 'react';
import {View, Text} from 'react-native';

export class NoRelayScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{'No relay screen'}</Text>
      </View>
    );
  }
}