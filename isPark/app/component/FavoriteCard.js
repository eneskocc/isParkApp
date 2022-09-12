import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {colors} from '../config';

export class FavoriteCard extends Component {
  render() {
    const aaa =
      (this.props.data.emptyCapacity * 100) / this.props.data.capacity;

    const w = Math.round(aaa) + '%';
    console.log(aaa);
    return (
      <TouchableOpacity
        style={{
          width: '100%',
          paddingHorizontal: 10,
          paddingVertical: 15,
          marginVertical: 10,
          backgroundColor: colors.green,
          borderRadius: 10,
        }}
        onPress={this.props.onClick}>
            <View style={{width:'100%',alignItems:'flex-end'}}>
            <TouchableOpacity>
          <Image
            style={{width: 30, height: 30,}}
            source={require('../assets/images/home/Shape1.png')}
          />
        </TouchableOpacity>
            </View>
        
        <Text style={{fontSize: 20, color: colors.white, paddingVertical: 10}}>
          {this.props.data.parkName}
        </Text>
        <Text style={{fontSize: 15, color: colors.white}}>Doluluk oranı</Text>
        <View
          style={{
            width: w,
            backgroundColor: colors.white,
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 10,
          }}>
          <Text>{w}</Text>
        </View>
        <Text style={{fontSize: 15, color: colors.white}}>
          Çalışma saatleri
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {this.props.data.workHours}
        </Text>
        <Text style={{fontSize: 15, color: colors.white}}>Adresi</Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {this.props.data.address}
        </Text>
        <Text style={{fontSize: 15, color: colors.white}}>Park tipi</Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {this.props.data.parkType}
        </Text>
        <Text style={{fontSize: 15, color: colors.white}}>Ücretsiz süre</Text>
        <Text
          style={{
            fontSize: 20,
            color: colors.white,
            paddingVertical: 5,
            paddingHorizontal: 10,
          }}>
          {this.props.data.freeTime}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default FavoriteCard;
