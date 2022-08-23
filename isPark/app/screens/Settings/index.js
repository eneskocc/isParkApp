import { Text, View,Image } from 'react-native'
import React, { Component } from 'react'
import Header from '../../component/Header'
import { colors } from '../../config'

export class Settings extends Component {
  render() {
    return (
      <View style={{backgroundColor:colors.gray,flex:1}}>
          <Header txt={'Ayarlar'} />
          
        <View style={{paddingHorizontal:'6%',backgroundColor:colors.white,paddingVertical:20,flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginVertical:15
    }}>
        <Image
            style={{width: 40, height: 40,}}
            source={require('../../assets/images/home/Avatar.png')}
          />
          <View style={{justifyContent:'center',marginHorizontal:10}}>
              <Text>Enes KOÇ</Text>
          </View>
          <Image
            style={{width: 15, height: 25,}}
            source={require('../../assets/images/home/ok.png')}
          />
        </View>
      </View>
    )
  }
}

export default Settings