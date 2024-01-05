import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Player} from '../../screens/Player';
import {News, Radio} from '../../images';
import {MyBottomBar} from './MyBottomBar';
import {Newslatter} from '../../screens/Newslatter';

const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <Tab.Navigator
      tabBar={props => <MyBottomBar {...props} />}
      initialRouteName="Newslatter"
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Player"
        component={Player}
        options={{
          tabBarLabel: 'ouça online',
          tabBarIcon: Radio,
        }}
      />
      <Tab.Screen
        name="Newslatter"
        component={Newslatter}
        options={{
          tabBarLabel: 'notícias',
          tabBarIcon: News,
        }}
      />
    </Tab.Navigator>
  );
}
