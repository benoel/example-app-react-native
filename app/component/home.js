import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ScrollView, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { logout } from '../../redux/actions/auth';


class Home extends Component {
    userLogout(e) {
        this.props.onLogout();
        e.preventDefault();
    }

    render() {
        return (
            <View>
            <Text style={{fontSize: 27, textAlign: 'center' }}>
            {`Welcome ${this.props.username}`}
            </Text>
            <View style={{margin: 20}}/>
            <Button
            onPress={(e) => this.userLogout(e)} 
            title="LOGOUT"
            backgroundColor="#007E65"
            />
            </View>
            );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        username: state.tes.username
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => { dispatch(logout()); }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
