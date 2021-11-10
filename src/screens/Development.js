import React from 'react';
import {View, Text} from 'react-native';
import LottieView from 'lottie-react-native';
const Development = () => {
  return (
    <LottieView
      source={require('../assets/animations/development.json')}
      autoPlay
      loop
      style={{backgroundColor: '#3490dc'}}
    />
  );
};

export default Development;
