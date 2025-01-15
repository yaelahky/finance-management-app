import { Dimensions, Platform, StatusBar } from 'react-native';

export const getStatusBarHeightByOS = () => {
  const { height, width } = Dimensions.get('window');

  if (Platform.OS === 'android') {
    return StatusBar.currentHeight;
  } else if (Platform.OS === 'ios') {
    if (Platform.isPad) {
      return 24; // standard height for iPads
    } else if ((Platform.OS === 'ios' && height >= 812) || width >= 812) {
      return 44; // height for iPhone X and later models
    } else {
      return 20; // standard height for other iPhones
    }
  } else {
    return StatusBar.currentHeight || 0; // default value for unsupported platforms
  }
};

export const getScreenWidth = percentage => {
  const windowWidth = Dimensions.get('window').width;
  return (windowWidth * percentage) / 100;
};

export const getScreenHeight = percentage => {
  const windowHeight = Dimensions.get('window').height;
  return (windowHeight * percentage) / 100;
};

export const currencyParser = amount => {
  const numb = amount;
  const format = numb?.toString().split('').reverse().join('');
  const convert = format?.match(/\d{1,3}/g);
  if (amount < 0) {
    return 'Rp-' + convert?.join('.').split('').reverse().join('');
  } else {
    return 'Rp' + convert?.join('.').split('').reverse().join('');
  }
};