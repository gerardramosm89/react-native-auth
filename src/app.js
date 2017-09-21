import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';
import { Button, Spinner } from './components/common';

class App extends Component {
  state = {
    loggedIn: null
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAftCvNAlAAGA2Jwz9CoSMnMo3nRVO5Kaw',
      authDomain: 'rn-auth-898be.firebaseapp.com',
      databaseURL: 'https://rn-auth-898be.firebaseio.com',
      projectId: 'rn-auth-898be',
      storageBucket: 'rn-auth-898be.appspot.com',
      messagingSenderId: '1046040963108'
    });

    firebase.auth().onAuthStateChanged((user) => {
      console.log('auth state changing');
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch(this.state.loggedIn) {
      case true:
        return <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Auth!' />
        {this.renderContent()}
      </View>
    );
  }
}
export default App;