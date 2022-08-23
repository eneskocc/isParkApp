import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
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
    this.props.getDataId(780);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.GET_PARK_REQUEST_STATUS == 2) {
      console.log('aaa' + this.props.PARK_ID.locationName);
    }
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

    if (this.props.GET_PARK_ID_REQUEST_STATUS == 2) {
      return (
        <View
          style={{
            backgroundColor: colors.green,
            width: 200,
            height: 100,
            marginHorizontal: 10,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>tem.parkName</Text>
        </View>
      );
    }
    return (
      <View style={{width: '150%'}}>
        <MapView
          initialRegion={INITIAL_REGION}
          style={{height: '98%', zIndex: 1}}>
          {_generateMarkers(this.props.PARK)}
        </MapView>
        <ScrollView
          horizontal
          style={{
            position: 'relative',
            bottom: 169,
            zIndex: 5,
            height: 100,
            paddingBottom: 100,
            backgroundColor:colors.white,
       
            
          }}>
          {this.props.GET_PARK_ID_REQUEST_ERROR ? (
            <Text
              style={{
                color: colors.red,
                fontFamily: 'Poppins-Bold',
                textAlign: 'center',
                alignSelf: 'center',
                marginTop: '50%',
                fontSize: 20,
              }}>
              eneee
            </Text>
          ) : (
            this.props.FAVORITE.map(item => (
              <View
                style={{
                  backgroundColor: colors.green,
                  width: '100%',
                  height: 100,
                  marginHorizontal: 10,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text>{item.parkName}</Text>
                <Text>{item.workHours}</Text>
                <Text>{item.address}</Text>
                <Text>{item.parkType}</Text>
              </View>
            ))
          )}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state, props) => {
  const {
    PARK,
    GET_PARK_REQUEST_STATUS,
    PARK_ID,
    FAVORITE,
    GET_PARK_ID_REQUEST_STATUS,
    GET_PARK_ID_REQUEST_ERROR,
  } = state.default;
  return {
    PARK,
    GET_PARK_REQUEST_STATUS,
    PARK_ID,
    FAVORITE,
    GET_PARK_ID_REQUEST_STATUS,
    GET_PARK_ID_REQUEST_ERROR,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  getData: () => {
    dispatch({
      type: $.GET_PARK,
    });
  },
  getDataId: id => {
    dispatch({
      type: $.GET_PARK_ID,
      id,
    });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Home);
