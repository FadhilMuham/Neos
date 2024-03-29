// BottomNavigation.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchPage'
import ProjectScreen from './ProjectScreen';
import ProfileScreen from './ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';

import { Provider } from 'react-redux';
import store from '../redux/store';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (

        <NavigationContainer independent={true}> 
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarStyle: {
                position: 'absolute',
                bottom: 0, // Adjust this value to set the position from the bottom
                left: 0,
                right: 0,
                elevation: 0,
                backgroundColor: '#fff',
                borderRadius: 15,
                height: 60,
                alignItems: 'center',
                justifyContent: 'center',
                ...Platform.select({
                  ios: {
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowOpacity: 1,
                    shadowRadius: 20,
                  },
                  android: {
                    elevation: 5,
                  },
                }),
              },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'Search') {
                  iconName = focused ? 'search' : 'search-outline';
                } else if (route.name === 'Project') {
                  iconName = focused ? 'business' : 'business-outline';
                } else if (route.name === 'Profile') {
                  iconName = focused ? 'person' : 'person-outline';
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}>
              
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Project" component={ProjectScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
        </NavigationContainer>
  );
};


export default BottomNavigation;
