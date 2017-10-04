import React from 'react';
import { StyleSheet, Text, View , TextInput, Alert} from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import axios from 'axios';
import { login } from '../../redux/actions/auth';
import {StackNav} from '../navigator';
// import firebaseApp from '../../firebase';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      route: 'Login',
      username: '',
      password: ''
    };
    // this.itemsRef = firebaseApp.database().ref();
  }

  // to test Firebase
  // userLogin () {
  //   this.itemsRef.set({
  //     username: 'dari app',
  //     password: 'bodo amat',
  //     email: 'ini email'
  //   });
  // }

  userLogin () {
    this.props.onLogin(this.state.username, this.state.password);
  }

  toRegister(){
    this.props.navigation.navigate('Register')
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>INVENTORY</Text>
      <TextInput
      onChangeText={(text) => this.setState({ username: text })}
      returnKeyType="next"
      autoCapitalize='none'
      autoCorrect={false}
      value={this.state.username} 
      style={styles.inputUsername}
      placeholder="Username"
      onSubmitEditing={() => this.passwordInput.focus()}
      />
      <TextInput
      onChangeText={(text) => this.setState({ password: text })}
      style={styles.inputPassword}
      placeholder="Password"
      autoCapitalize='none'
      autoCorrect={false}
      value={this.state.password} 
      secureTextEntry
      returnKeyType="go"
      ref={(input) => this.passwordInput = input}
      />
      <Button
      title='LOGIN'
      style={styles.loginButton}
      backgroundColor="#007E65"
      onPress={() => this.userLogin()} />
      <Button
      title='REGISTER'
      backgroundColor="#007E65"
      onPress={() => this.toRegister()} />
      </View>
      );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.tes.isLoggedIn
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (username, password) => { dispatch(login(username, password)); },
    onSignUp: (username, password) => { dispatch(signup(username, password)); }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


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
  loginButton: {
    marginBottom: 10,
  }
});


