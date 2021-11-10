import React, {useRef, useState} from 'react';
import {View, Text, Animated, Easing} from 'react-native';
import {Button} from 'react-native-elements';

const Home = () => {
  const [width, setWidth] = useState(100);
  const [value, setValue] = useState(20);

  const percentage = (value / width) * 100;
  const animation = useRef(new Animated.Value(0)).current;

  const onPress = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
    Animated.timing(animation, {
      toValue: value,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View>
      <Text>Home</Text>
      <View style={{width: 100, height: 20, backgroundColor: 'red'}}>
        <Animated.View
          style={{
            backgroundColor: 'green',
            height: 20,
            width: animation,
            overflow: 'hidden',
          }}
        />
      </View>
      <Button title={'Aniamte'} onPress={onPress} />
    </View>
  );
};

export default Home;
