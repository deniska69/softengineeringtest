import {Dimensions} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Theme = {
  light: {
    backgroundColor: 'white',
  },
  dark: {
    backgroundColor: Colors.darker,
  },
};

export default Theme;

export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT = Dimensions.get('window').height;

export const DEV_LOGIN = 'admin';
export const DEV_PASSWORD = 'admin';

export const THE_CAT_API = `live_YzaJLEhiqUcLUT0saK2kfgR1lRJOCQWAvEnJx0DIZ8BQlzakuWwYXwXeG6aIqyFE`;
