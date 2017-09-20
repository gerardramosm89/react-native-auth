import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label }) => {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  return (
    <View>
      <Text>{label}</Text>
      <TextInput
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
        style={{height: 20, width: 1}}
      />
    </View>
  );
};

export { Input };