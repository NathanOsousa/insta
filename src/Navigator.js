import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Feed from '../src/Screens/feed';
import AddComment from '../src/Screens/AddPhoto';
import Profile from '../src/Screens/Profile';
import Login from '../src/Screens/Login';
import Register from '../src/Screens/Register';

const Tab = createBottomTabNavigator();
const Auth = createStackNavigator();
const authScreens = () => (
  <Auth.Navigator>
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Profile" component={Profile} />
    <Auth.Screen name="Register" component={Register} />
  </Auth.Navigator>
);

const Navigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            let iconName;

            switch (route.name) {
              case 'Home':
                iconName = 'home';
                break;
              case 'AddPhoto':
                iconName = 'camera';
                break;
              case 'Profile':
                iconName = 'user';
                break;
              default:
                break;
            }

            return <Icon name={iconName} size={30} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
          style: {position: 'absolute'},
        }}>
        <Tab.Screen name="Home" component={Feed} />
        <Tab.Screen name="AddPhoto" component={AddComment} />
        <Tab.Screen name="Profile" component={authScreens} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default Navigator;
