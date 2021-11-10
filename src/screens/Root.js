import React from 'react';
import {Linking} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AppNavigator from '../navigation/AppNavigator';

const RootScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <AppNavigator />
    </SafeAreaView>
  );
};

export default RootScreen;
