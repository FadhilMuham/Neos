import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './HomeScreen';
import { SkillsScreen } from './SkillsScreen';
import { ProfileScreen } from './ProfileScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#4CAF50',
        inactiveTintColor: '#ccc',
        style: {
          backgroundColor: '#f5f5f5',
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
          borderTopWidth: 0,
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Image source={require('./assets/home.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Skills"
        component={SkillsScreen}
        options={{
          tabBarLabel: 'Skills',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Image source={require('./assets/skills.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.iconContainer}>
              <Image source={require('./assets/profile.png')} style={styles.icon} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});

export default TabNavigator;