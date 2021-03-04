import {Dimensions} from 'react-native';

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

export default {
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  resolution: Math.round((screenHeight / screenWidth) * 2.54),
};
