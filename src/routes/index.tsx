import React from 'react';
import {} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
//import messaging from '@react-native-firebase/messaging';

//screens
import Splash from '../screens/Splash';
import Welcome from '../screens/Welcome';
import MainNavigator from './MainNavigator';
import {Loading} from '../components';

const Stack = createStackNavigator();

export default function AppNavigator() {
  const linking = {
    prefixes: ['moviemania://', 'https://moviemania-4e83c.web.app'],
    config: {
      screens: {
        Splash: 'splash',
        Welcome: 'welcome',
        Main: {
          path: 'main',
          screens: {
            HomeStack: {
              screens: {
                Detail: 'detail/:id',
              },
            },
            DiscoverStack: {
              path: 'discover',
              screens: {
                Detail: 'detail/:id',
              },
            },
            Cast: 'casts',
            Settings: {
              path: 'setting',
              screens: {
                Account: 'account',
              },
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Loading />}>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Main">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Main" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
