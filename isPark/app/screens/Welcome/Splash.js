import {Text, View, SafeAreaView, Image} from 'react-native';
import React, {Component,componentDidMount} from 'react';

export class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Home")
        }, 2000)
    }
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          style={{width: '100%', height: 200, resizeMode: 'contain'}}
          source={require('../../assets/images/home/logo.png')}
        />
      </SafeAreaView>
    );
  }
}

export default Splash;
