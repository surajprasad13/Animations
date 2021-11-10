import React from 'react';

import {View} from 'react-native';

import LottieView from 'lottie-react-native';

const Loading = () => {
  return (
    <View style={{width: 200, maxHeight: 200, flex: 1}}>
      <LottieView
        style={{}}
        source={require('../assets/animations/loading.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
