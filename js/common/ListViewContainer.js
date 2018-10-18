// @flow

import React from 'react';

import { View, FlatList, Text, TouchableOpacity } from 'react-native';

export default class ListViewContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePress = item => {
    const { canJump, navigateTo } = this.props;
    console.log('===>list item pressed', item);
    if (canJump && navigateTo) {
      navigateTo(item);
    }
  };

  render() {
    const personList = this.props.personList || [];
    return (
      <FlatList
        style={{ flex: 1, alignSelf: 'stretch' }}
        data={personList}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.handlePress(item)}>
            <View style={{ flex: 1, height: 40, margin: 8 }}>
              <Text>{item.fullName}</Text>
              <Text>{item.email}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: 'gray' }} />
        )}
      />
    );
  }
}
