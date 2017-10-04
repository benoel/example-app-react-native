import React, {Component} from 'react';
import {KeyboardAvoidingView, View, StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import Login from './component/login';
import Home from './component/home';

class Index extends Component {

  render() {
    if (this.props.isLoggedIn) {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.contentForm}>
        <Home />
        </View>
        </KeyboardAvoidingView>
        );
    } else {
      return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.contentForm}>
        <Login />
        </View>
        </KeyboardAvoidingView>
        );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.tes.isLoggedIn
  };
}

export default connect(mapStateToProps)(Index);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#1ABC9C',
  }
});
