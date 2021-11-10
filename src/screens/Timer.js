import React, {PureComponent} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {Button, Switch} from 'react-native-elements';

const Timer = () => {
  return (
    <View style={styles.container}>
      <Text>Timer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Timer;
