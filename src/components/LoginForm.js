import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';
import firebase from 'firebase';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
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
  onLoginSuccess() {
    this.setState({ 
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }
  onLoginFail() {
    this.setState({
      loading: false,
      error: `Authentication failed.`
    })
  }
  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: '', loading: true });
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }
  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'} />;
    } else {
      return (
        <Button onPress={this.onButtonPress.bind(this)}>
          Log in
        </Button>
      );
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
            {this.renderButton()}
          </CardSection>
        </Card>
      </View>
    );
  }
}