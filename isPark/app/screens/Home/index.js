import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect, componentDidMount, Component} from 'react';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import * as $ from '../../redux/actions';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {colors} from '../../config';
var INITIAL_REGION;
Geolocation.getCurrentPosition(info => {
  console.log(info);
  INITIAL_REGION = {
    latitude: 41.0322,
    longitude: 28.9859,
    latitudeDelta: 1,
    longitudeDelta: 1,
  };
});
class Home extends Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    const _generateMarkers = arr => {
      const markers = [];

      arr.forEach(element => {
        markers.push(
          <Marker
            key={element.parkID}
            coordinate={{
              latitude: element.lat,
              longitude: element.lng,
            }}
          />,
        );
      });

      return markers;
    };

    return (
      <View style={{width: '150%'}}>
        <MapView
          initialRegion={INITIAL_REGION}
          style={{height: '98%', zIndex: 1}}>
          {_generateMarkers(this.props.PARK)}
        </MapView>
        <ScrollView
          horizontal
          style={{position: 'relative', bottom: 180, zIndex: 5,height:100,paddingBottom:100}}>
          <View
            style={{
              backgroundColor: colors.green,
              width: 200,
              height: 100,
              marginHorizontal: 10,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              backgroundColor: colors.green,
              width: 200,
              height: 100,
              marginHorizontal: 10,
              borderRadius: 10,
            }}></View>
          <View
            style={{
              backgroundColor: colors.green,
              width: 200,
              height: 100,
              borderRadius: 10,
            }}></View>
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  const {PARK} = state.default;
  return {PARK};
};

const mapDispatchToProps = (dispatch, props) => ({
  getData: () => {
    dispatch({
      type: $.GET_PARK,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
