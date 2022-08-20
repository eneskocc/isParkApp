import React, {useState, useEffect, componentDidMount, Component} from 'react';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import * as $ from '../../redux/actions';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
var INITIAL_REGION;
Geolocation.getCurrentPosition(info => {
  console.log(info);
  INITIAL_REGION = {
    latitude: info.coords.latitude,
    longitude: info.coords.longitude,
    latitudeDelta: 10,
    longitudeDelta: 5,
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
      <MapView initialRegion={INITIAL_REGION} style={{flex: 1}}>
        {_generateMarkers(this.props.PARK)}
      </MapView>
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
