import * as React from 'react';
import { Buttom, Card, CardSection, Input } from './common';



interface ILoginFormState {
    email?: string;
    pass?: string
}

export default class LoginForm extends React.Component<void, ILoginFormState> {

    constructor() {
        super();
        this.state = { email: '', pass: '' };
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
                <CardSection>
                    <Buttom>
                        Log in
                  </Buttom>
                </CardSection>
            </Card>
        );
    }
}