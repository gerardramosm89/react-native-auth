import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.textStyle = {
      fontSize: 40
    }
    this.viewStyle = {
      backgroundColor: '#F8F8F8',
      justifyContent: 'center',
      alignItems: 'center',
      height: 80,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      position: 'relative'
    }
  }

  render() {
    return(
      <View style={this.viewStyle}>
        <Text style={this.textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

export default { Header };