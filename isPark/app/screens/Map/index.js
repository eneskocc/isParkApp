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
    INITIAL_REGION = {
      latitude: 41,
      longitude: 29.5,
      latitudeDelta: 2,
      longitudeDelta: 2,
    };
  });

export class Map extends Component {
    componentDidMount() {
        
        this.props.getDataId(780);
      }
  render() {
    return (
      <View>
        <Text>Map</Text>
      </View>
    )
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
  export default connect(mapStateToProps, mapDispatchToProps)(Map);