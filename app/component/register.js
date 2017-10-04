import React from 'react';
import { StyleSheet, Text, View , TextInput, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../../redux/actions/auth';
// import firebaseApp from '../../firebase';
import {StackNav} from '../navigator';

export default class Register extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
    // this.auth = firebaseApp.auth();
  }

  register(){
    this.auth.createUserWithEmailAndPassword(email, password).then(function(user) {  
      user.updateProfile({
        displayName: username
      }).then(function() {
        // Update successful.
      }, function(error) {
        // An error happened.
      });        
    }, function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // [START_EXCLUDE]
    if (errorCode == 'auth/weak-password') {
      alert('The password is too weak.');
    } else {
      console.error(error);
    }
    // [END_EXCLUDE]
  });
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>INVENTORY</Text>
      <TextInput
      onChangeText={(text) => this.setState({ name: text })}
      returnKeyType="next"
      autoCapitalize='none'
      autoCorrect={false}
      value={this.state.name} 
      style={styles.inputUsername}
      placeholder="Name"
      onSubmitEditing={() => this.emailInput.focus()}
      />
      <TextInput
      onChangeText={(text) => this.setState({ email: text })}
      style={styles.inputPassword}
      placeholder="Password"
      autoCapitalize='none'
      autoCorrect={false}
      value={this.state.password}
      returnKeyType="next"
      ref={() => this.passwordInput.focus()}
      />
      <TextInput
      onChangeText={(text) => this.setState({ password: text })}
      style={styles.inputPassword}
      placeholder="Password"
      autoCapitalize='none'
      autoCorrect={false}
      value={this.state.password}
      returnKeyType="go"
      secureTextEntry
      ref={(input) => this.passwordInput = input}
      />
      <Button
      title='REGISTER'
      backgroundColor="#007E65"
      onPress={() => this.register()} />
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff'
  },
  inputUsername: {
    height: 40,
    padding: 10,
    backgroundColor: '#66D8C2',
    margin: 15,
    marginBottom: 10,
    color: '#fff'
  },
  inputPassword: {
    height: 40,
    padding: 10,
    backgroundColor: '#66D8C2',
    margin: 15,
    marginTop: 0,
    marginBottom: 10,
    color: '#fff'
  },
});


