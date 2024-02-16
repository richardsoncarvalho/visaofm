import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Player} from '../../screens/Player';
import {News, Radio} from '../../images';
import {Newslatter} from '../../screens/Newslatter';
import {LargeBanner} from '../../components';

const Tab = createBottomTabNavigator();

export function MainStack() {
  return (
    <>
      <LargeBanner />

      <Tab.Navigator
        initialRouteName="Newslatter"
        screenOptions={{
          headerShown: false,
          tabBarInactiveTintColor: '#f1f1f1',
          tabBarActiveTintColor: '#effd29',
          tabBarIconStyle: {
            marginTop: 5,
          },
          tabBarLabelStyle: {
            marginBottom: 5,
          },
          tabBarStyle: {
            backgroundColor: '#333',
            borderTopWidth: 0,
          },
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
    </>
  );
}
