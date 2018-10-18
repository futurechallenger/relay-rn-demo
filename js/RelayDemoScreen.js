// @flow
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import environment from '../relay-environment';
import ListViewContainer from './common/ListViewContainer';

export class RelayDemoScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  navigateTo = item => {
    this.props.navigation.push('Person', { item });
  };

  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query RelayDemoScreenQuery {
            allPeople {
              id
              fullName
              email
            }
          }
        `}
        variables={{}}
        render={({ error, props }) => {
          if (error) {
            console.log('====>query: ', error, props);
            return (
              <View style={styles.container}>
                <Text>{'Error!'}</Text>
              </View>
            );
          }

          if (!props) {
            return (
              <View style={styles.container}>
                <Text>{'Loading...'}</Text>
              </View>
            );
          }

          return (
            <View style={styles.container}>
              <ListViewContainer
                personList={props.allPeople}
                canJump
                navigateTo={this.navigateTo}
              />
            </View>
          );
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
