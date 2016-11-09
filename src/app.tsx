import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './Components/common/';

const {Component} = React;

export default class auth extends Component<void, void> {
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text> An App!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});