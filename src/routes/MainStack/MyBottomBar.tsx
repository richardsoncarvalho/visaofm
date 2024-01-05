import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {LargeBanner} from '../../components';

export function MyBottomBar({state, descriptors, navigation}) {
  return (
    <View style={{backgroundColor: '#333'}}>
      <LargeBanner />

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];

          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const Icon =
            options.tabBarIcon !== undefined ? options.tabBarIcon : null;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 10,
              }}>
              <Icon size={24} color={isFocused ? '#effd29' : '#f1f1f1'} />

              <Text style={{color: isFocused ? '#effd29' : '#f1f1f1'}}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
