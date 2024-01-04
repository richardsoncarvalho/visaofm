import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Player} from '../../screens/Player';
import {Radio} from '../../images';
import {MyBottomBar} from './MyBottomBar';

const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <Tab.Navigator
      tabBar={props => <MyBottomBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarLabel: 'Ouça online',
          tabBarIcon: Radio,
        }}
      />
    </Tab.Navigator>
  );
}
