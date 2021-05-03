import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../src/Screens/feed';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarIcon: ({color}) => {
            return <Icon name="home" size={30} color={color} />;
          },
        }}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="AddPhoto" component={Feed} />
        <Tab.Screen name="Profile" component={Feed} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
