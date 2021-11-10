import React from 'react';
import {Icon, Text} from 'react-native-elements';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

//screens
import Home from '../screens/Home';
import Explore from '../screens/Explore';
import Contact from '../screens/Contact';
import User from '../screens/User';
import Details from '../screens/Detail';

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

export default () => {
  const linking = {
    prefixes: ['animation://', 'https://grounded-chain-267616.web.app'],
    config: {
      screens: {
        Home: {
          path: 'home',
          screens: {
            Details: 'details/:id',
          },
        },
        Explore: 'explore',
        Contact: 'contact',
        User: 'user',
      },
    },
  };

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading</Text>}>
      <Bottom.Navigator>
        <Bottom.Screen
          name="Home"
          component={HomeStack}
          options={{tabBarIcon: () => <Icon name="home" type="feather" />}}
        />
        <Bottom.Screen
          name="Explore"
          component={Explore}
          options={{tabBarIcon: () => <Icon name="compass" type="feather" />}}
        />
        <Bottom.Screen
          name="Contact"
          component={Contact}
          options={{
            tabBarIcon: () => <Icon name="contacts" type="antdesign" />,
          }}
        />
        <Bottom.Screen
          name="User"
          component={User}
          options={{tabBarIcon: () => <Icon name="user" type="evilicon" />}}
        />
      </Bottom.Navigator>
    </NavigationContainer>
  );
};
