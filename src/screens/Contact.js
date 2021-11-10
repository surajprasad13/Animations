import React, {PureComponent} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import {Button, Switch} from 'react-native-elements';

const Contact = () => {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Contact;
