import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import Header from './components/common/Header';
import LoginForm from './components/LoginForm';


class App extends Component {
  state = {
    loggedIn: false
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
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }

  render() {
    return (
      <View>
        <Header headerText='Auth!' />
        <LoginForm />
      </View>
    );
  }
}
export default App;