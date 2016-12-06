import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Spinner, Button, CardSection } from './Components/common';
import firebase from 'firebase';
import LoginForm from './Components/LoginForm';

const {Component} = React;

export default class auth extends Component<any, any> {
  /**
   *
   */
  constructor(props: any) {
    super(props);
    this.state = { logggedIn: null };
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDhxShSGQFcmcu4FUy53dwmmkL5G_uKDHw',
      authDomain: 'react-auth-fd14e.firebaseapp.com',
      databaseURL: 'https://react-auth-fd14e.firebaseio.com',
      storageBucket: 'react-auth-fd14e.appspot.com',
      messagingSenderId: '565149477811'
    });
    firebase.auth().onAuthStateChanged((user: any) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <CardSection>
            <Button OnPress={() => firebase.auth().signOut()} > Log Out </Button>
          </CardSection>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication' />
        {this.renderContent()}
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