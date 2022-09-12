import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../component/Header'
import FavoriteCard from '../../component/FavoriteCard'
import * as $ from '../../redux/actions';
import {connect} from 'react-redux';
export class Favorite extends Component {
    componentDidMount() {
        
        this.props.getDataId(780);
      }
  render() {
    console.log(this.props.FAVORITE)
    return (
      <View>
        <Header txt={'Favorite'}/>
        <View style={{paddingHorizontal:'6%'}}>
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
                <FavoriteCard key={item.parkID} data={item} onClick={()=>this.props.navigation.navigate('Map')}/>
            ))
          )}

        </View>
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
  export default connect(mapStateToProps, mapDispatchToProps)(Favorite);