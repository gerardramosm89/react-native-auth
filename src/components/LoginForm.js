import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <TextInput
            value={this.state.text}
            onChangeText={text => {
              this.setState({ text: text }, () => console.log(this.state.text));
            }}
            style={{ height: 20, width: 100 }} />
          </CardSection>
          <CardSection>
            <TextInput style={{ height: 20, width: 100 }} />
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