import React, {useEffect, useRef} from 'react';
import {View, Text, Animated, TextInput, StyleSheet} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedInput = Animated.createAnimatedComponent(TextInput);

const Donut = ({
  percentage = 70,
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = 'tomato',
  delay = 0,
  textColor,
  max = 100,
}) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  const halfCirlce = radius + strokeWidth;

  const circleCurference = 2 * Math.PI * radius;

  const circleRef = useRef();
  const inputRef = useRef();

  const animation = toValue => {
    return Animated.timing(animatedValue, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    animation(percentage);

    animatedValue.addListener(v => {
      const maxPercentage = (100 * v.value) / max;
      const strokeDashoffset =
        circleCurference - (circleCurference * maxPercentage) / 100;
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
      if (inputRef?.current) {
        inputRef?.current.setNativeProps({
          text: `${Math.round(v.value)}`,
        });
      }
    });

    return () => {
      animatedValue.removeAllListeners();
    };
  }, [max, percentage]);

  return (
    <View>
      <Svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${halfCirlce * 2} ${halfCirlce * 2}`}>
        <G rotation="-90" origin={`${halfCirlce}, ${halfCirlce}`}>
          <Circle
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeOpacity={0.2}
          />
          <AnimatedCircle
            ref={circleRef}
            cx="50%"
            cy="50%"
            stroke={color}
            strokeWidth={strokeWidth}
            r={radius}
            fill="transparent"
            strokeDasharray={circleCurference}
            strokeDashoffset={circleCurference}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <AnimatedInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        defaultValue="0"
        style={[
          StyleSheet.absoluteFillObject,
          {
            fontSize: radius / 2,
            color: textColor ?? color,
            fontWeight: '900',
            textAlign: 'center',
          },
        ]}
      />
    </View>
  );
};

export default Donut;
