import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const screen = {
  width,
  height,
};

const apiUrl = 'https://api.ibb.gov.tr/ispark';

const colors = {
  white: '#FFFFFF',
  green: '#4CE5B1',
  gray: '#EFEFF4',
};

export {screen, colors, apiUrl};
