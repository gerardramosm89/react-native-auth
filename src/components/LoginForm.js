import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    }
    this.styles = {
      inputStyle: {
        height: 20,
        width: 100
      },
      errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
      }
    }
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '' })
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .catch((err) => {
            this.setState({ error: `Authentication failed ${err}` })
          });
      });
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
            label="Password"
            placeholder="password"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => {
              this.setState({ password }, () => console.log(this.state.password));
            }}
            />
          </CardSection>
          <Text style={this.styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)}>
              Log in
            </Button>
          </CardSection>
        </Card>
      </View>
    );
  }
}