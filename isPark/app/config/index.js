import {Dimensions, } from 'react-native';


const {width, height} = Dimensions.get('window');
const screen = {
  width,
  height,
};

const apiUrl='https://api.ibb.gov.tr/ispark/Park'; 

const colors = {
  
    green:'#4CE5B1',
};



export {
  screen,
  colors,
  apiUrl,
};