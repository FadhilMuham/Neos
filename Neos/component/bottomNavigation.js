import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screen/HomeScreen';
import SearchScreen from '../Screen/SearchPage';
// import ProjectScreen from './screens/ProjectScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import SearchScreen from '../Screen/SearchPage';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <NavigationContainer independent={true} >
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        {/* <Tab.Screen name="Project" component={ProjectScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomNavigation;