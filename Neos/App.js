import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import BottomNavigation from './Screen/BottomNavigation';
import WelcomeScreen from './Screen/WelcomeScreen';
import OptionScreen from './Screen/OptionScreen';
import UserForm from './Screen/UserForm';
import WorkerForm from './Screen/WorkerForm';

import { Provider } from 'react-redux';
import store from './redux/store';


const Stack = createStackNavigator();


const App = () => {


  return (
    <Provider store={store}> 
        <NavigationContainer> 
          <Stack.Navigator>
            <Stack.Screen name='Welcome' component={WelcomeScreen}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name='Option' component={OptionScreen}/>
            <Stack.Screen name='UserForm' component={UserForm}/>
            <Stack.Screen name='WorkerForm' component={WorkerForm}/>
            <Stack.Screen name='App' component={BottomNavigation} />
          </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
};

export default App;
