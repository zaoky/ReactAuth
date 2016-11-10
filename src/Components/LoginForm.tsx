import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Buttom, Card, CardSection, Input } from './common';
import firebase from 'firebase';


interface ILoginFormState {
    email?: string;
    pass?: string;
    error?: string;
}

export default class LoginForm extends React.Component<void, ILoginFormState> {

    constructor() {
        super();
        this.state = { email: '', pass: '', error: '' };
    }

    btnLoginPress() {
        this.setState({error: ''});
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.pass).catch(
            () => {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.pass).catch(
                    () => {
                        this.setState({ error: 'Authentication Failed.' });
                    });
            });
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label='Email'
                        placeholder='user@gmail.com'
                        onChangeText={email => this.setState({ email })}
                        value={this.state.email} />
                </CardSection>
                <CardSection>
                    <Input
                        label='Password'
                        placeholder='password'
                        onChangeText={pass => this.setState({ pass })}
                        value={this.state.pass}
                        secureTextEntry
                        />
                </CardSection>

                <Text style={[styles.errorTextStyle]} >  {this.state.error} </Text>

                <CardSection>
                    <Buttom onPress={this.btnLoginPress.bind(this)} >
                        Log in
                  </Buttom>
                </CardSection>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
});