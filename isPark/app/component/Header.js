import {Text, StyleSheet, View, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import React, {Component} from 'react';
import { colors } from '../config';

export default class Header extends Component {
  render() {
    return (
      <SafeAreaView style={{width: '100%', flexDirection: 'row',backgroundColor:colors.green}}>
        <TouchableOpacity
         onPress={this.props.onClick}
          style={{
            width: '10%',
            height:40,
            borderRadius:5,
            alignItems:'center',
            justifyContent:'center',
            marginHorizontal:'3%',
            marginBottom:10,
            marginTop:10,
            backgroundColor:colors.greeen,
          }}>
          <Image
            style={{
              width: '100%',
              height: 25,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/home/back.png')}
          />
        </TouchableOpacity>
        <View
            style={{
              alignItems: 'flex-start',
              width: '100%',
              paddingHorizontal: '5%',
              justifyContent:'center',
            }}>
            <Text style={styles.viewText}>{this.props.txt}</Text>
          </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: '50%',
    height: 70,
    resizeMode: 'contain',
  },
  viewText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: 25,
    lineHeight: 30,

  },
});