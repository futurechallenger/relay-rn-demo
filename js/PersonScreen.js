// @flow

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { graphql, QueryRenderer } from 'react-relay';

import ListViewContainer from './common/ListViewContainer';
import environment from '../relay-environment';

export default class PersonScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const { id, fullName, email } = navigation.getParam('item');
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query PersonScreenQuery($personId: ID!) {
            person(id: $personId) {
              friends {
                id
                fullName
                email
              }
            }
          }
        `}
        variables={{ personId: id }}
        render={({ error, props }) => {
          console.log('===>PersonScreen query', error, props);
          if (error || !props) {
            return (
              <View>
                <Text>{'ERROR'}</Text>
              </View>
            );
          }

          const friends = props.friends;
          return (
            <View style={styles.container}>
              <Text>{fullName}</Text>
              <Text>{email}</Text>
              <ListViewContainer personList={friends} canJump={false} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});
