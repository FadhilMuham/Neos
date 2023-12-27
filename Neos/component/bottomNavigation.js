import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import HomeScreen from '../Screen/HomeScreen';
import SearchScreen from '../Screen/SearchPage';
// import ProjectScreen from './screens/ProjectScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          // tabBarShowLabel: false ,
          tabBarStyle: {
            position: 'absolute',
            bottom: 30,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: 'black',
            borderRadius: 15,
            height: 90,
            ...Platform.select({
              ios: {
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowOpacity: 1,
                shadowRadius: 20,
              },
              android: {
                elevation: 15,
              },
            }),
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        {/* <Tab.Screen name="Project" component={ProjectScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;