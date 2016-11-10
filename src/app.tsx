import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header } from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

const {Component} = React;

export default class auth extends Component<void, void> {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhxShSGQFcmcu4FUy53dwmmkL5G_uKDHw',
      authDomain: 'react-auth-fd14e.firebaseapp.com',
      databaseURL: 'https://react-auth-fd14e.firebaseio.com',
      storageBucket: 'react-auth-fd14e.appspot.com',
      messagingSenderId: '565149477811'
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        <LoginForm />
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