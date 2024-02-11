// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/RegisterScreen';
// import BottomNavigation from './Screen/BottomNavigation';
// import WelcomeScreen from './Screen/WelcomeScreen';
// import OptionScreen from './Screen/OptionScreen';
// import UserForm from './Screen/UserForm';
// import WorkerForm from './Screen/WorkerForm';

// import { Provider } from 'react-redux';
// import store from './redux/store';


// const Stack = createStackNavigator();


// const App = () => {


//   return (
//     <Provider store={store}> 
//         <NavigationContainer> 
//           <Stack.Navigator>
//             <Stack.Screen name='Welcome' component={WelcomeScreen}/>
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="Register" component={RegisterScreen} />
//             <Stack.Screen name='Option' component={OptionScreen}/>
//             <Stack.Screen name='UserForm' component={UserForm}/>
//             <Stack.Screen name='WorkerForm' component={WorkerForm}/>
//             <Stack.Screen name='App' component={BottomNavigation} />
//           </Stack.Navigator>
//         </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;


// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Platform } from 'react-native';
// import { Provider } from 'react-redux';
// import store from './redux/store';
// import { Ionicons } from '@expo/vector-icons';
// import rootReducer from './redux/rootReducer';

// import WelcomeScreen from './Screen/WelcomeScreen';
// import LoginScreen from './Screen/LoginScreen';
// import RegisterScreen from './Screen/RegisterScreen';
// import OptionScreen from './Screen/OptionScreen';
// import UserForm from './Screen/UserForm';
// import WorkerForm from './Screen/WorkerForm';
// import HomeScreen from './Screen/HomeScreen';
// import SearchScreen from './Screen/SearchPage';
// import ProfileScreen from './Screen/ProfileScreen';
// import ProjectScreen from './Screen/ProjectScreen';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// const store = createStore(rootReducer);

// const BottomNavigation = () => {
//   return (
//     <Tab.Navigator
//             screenOptions={({ route }) => ({
//               tabBarStyle: {
//                 position: 'absolute',
//                 bottom: 20,
//                 left: 20,
//                 right: 20,
//                 elevation: 0,
//                 backgroundColor: '#fff',
//                 borderRadius: 15,
//                 height: 60,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 ...Platform.select({
//                   ios: {
//                     shadowColor: 'rgba(0, 0, 0, 0.1)',
//                     shadowOpacity: 1,
//                     shadowRadius: 20,
//                   },
//                   android: {
//                     elevation: 5,
//                   },
//                 }),
//               },
//               tabBarIcon: ({ focused, color, size }) => {
//                 let iconName;

//                 if (route.name === 'Home') {
//                   iconName = focused ? 'home' : 'home-outline';
//                 } else if (route.name === 'Search') {
//                   iconName = focused ? 'search' : 'search-outline';
//                 } else if (route.name === 'Project') {
//                   iconName = focused ? 'business' : 'business-outline';
//                 } else if (route.name === 'Profile') {
//                   iconName = focused ? 'person' : 'person-outline';
//                 }

//                 return <Ionicons name={iconName} size={size} color={color} />;
//               },
//             })}>
    
//       <Tab.Screen name="Home" component={HomeScreen} />
//       <Tab.Screen name='Project' component={ProjectScreen} />
//       <Tab.Screen name="Search" component={SearchScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Welcome" component={WelcomeScreen} />
//           <Stack.Screen name="Login" component={LoginScreen} />
//           <Stack.Screen name="Register" component={RegisterScreen} />
//           <Stack.Screen name="Option" component={OptionScreen} />
//           <Stack.Screen name="UserForm" component={UserForm} />
//           <Stack.Screen name="WorkerForm" component={WorkerForm} />
//           <Stack.Screen name="App" component={BottomNavigation} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// };

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { createStore } from 'redux';  // Import createStore for the store
import rootReducer from './redux/rootReducer';

import WelcomeScreen from './Screen/WelcomeScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import OptionScreen from './Screen/OptionScreen';
import UserForm from './Screen/UserForm';
import WorkerForm from './Screen/WorkerForm';
import HomeScreen from './Screen/HomeScreen';
import SearchScreen from './Screen/SearchPage';
import ProfileScreen from './Screen/ProfileScreen';
import ProjectScreen from './Screen/ProjectScreen';
import AllCertificatesScreen from './Screen/AllCertificateScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const store = createStore(rootReducer);

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 0,
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
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name='Project' component={ProjectScreen} />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Option" component={OptionScreen} />
          <Stack.Screen name="UserForm" component={UserForm} />
          <Stack.Screen name="WorkerForm" component={WorkerForm} />
          <Stack.Screen name="App" component={BottomNavigation} />
          <Stack.Screen name="AllCertificatesScreen" component={AllCertificatesScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
