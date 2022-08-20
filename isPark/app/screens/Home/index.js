import React, {useState, useEffect, componentDidMount,Component} from 'react';
import MapView from 'react-native-map-clustering';
import {Marker} from 'react-native-maps';
import * as $ from '../../redux/actions';
import {connect} from 'react-redux';
const INITIAL_REGION = {
  latitude: 39.43,
  longitude: 35.3,
  latitudeDelta: 9.25,
  longitudeDelta: 9.15,
};

class Home extends Component {
  componentDidMount() { 
    this.props.getData()
   }
  
  render() {
    console.log(this.props.PARK)
    return (
      <MapView initialRegion={INITIAL_REGION} style={{flex: 1}}>
    
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
