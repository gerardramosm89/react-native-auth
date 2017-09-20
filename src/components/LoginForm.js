import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
    this.styles = {
      inputStyle: {
        height: 20,
        width: 100
      }
    }
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              label={"Email"}
              placeholder="user@domain.com"
              value={this.state.email}
              onChangeText={email => {
                this.setState({ email }, () => console.log(this.state.email));
              }}
              style={this.styles.inputStyle}
            />
          </CardSection>
          <CardSection>
            <Input
            label={"Password"}
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password }, () => console.log(this.state.password));
            }}
            />
          </CardSection>
          <CardSection>
            <Button>
              Log in
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}