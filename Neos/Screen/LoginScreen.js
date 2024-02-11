// // LoginScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import dummyAccounts from '../freelanceData/dummyAcc';
// import HomeScreen from './HomeScreen';
// import BottomNavigation from './BottomNavigation';
// import RegisterScreen from './RegisterScreen';

// const LoginScreen = ({ navigation }) => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [pin, setPin] = useState('');

//   const handleLogin = () => {
//     const user = dummyAccounts.find((account) => account.phoneNumber === phoneNumber && account.pin === pin);

//     if (phoneNumber.length !== 10 || pin.length !== 6) {
//       Alert.alert('Invalid Input', 'Please enter a valid phone number and 6-digit PIN.');
//       return;
//     }

//     if (phoneNumber === user.phoneNumber && pin === user.pin) {
//       navigation.navigate('App');
//     } else {
//       Alert.alert('Authentication Failed', 'Invalid phone number or PIN.');
//     }
//     console.log('Login:', phoneNumber, pin);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Sliding background */}
//       <View style={styles.background}></View>

//       {/* Login form */}
//       <View style={styles.formContainer}>
//         <Text style={styles.title}>Login</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Phone Number"
//           keyboardType="phone-pad"
//           value={phoneNumber}
//           onChangeText={(text) => setPhoneNumber(text)}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="6-digit PIN"
//           keyboardType="numeric"
//           secureTextEntry
//           value={pin}
//           onChangeText={(text) => setPin(text)}
//         />
//         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>

//         <Text style={styles.registerText} onPress={() => navigation.navigate('Register')}>Don't have an account? Register here</Text>
      
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'green',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   background: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 300,
//     backgroundColor: '#3498db', //
//   },
//   formContainer: {
//     width: '80%',
//     padding: 20,
//     borderRadius: 10,
//     elevation: 5,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingLeft: 10,
//   },
//   loginButton: {
//     backgroundColor: '#3498db',
//     padding: 10,
//     borderRadius: 5,
//     width: '100%',
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   registerText: {
//     marginTop: 10,
//     color: '#3498db',
//   }
// });

// export default LoginScreen;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert } from 'react-native';
import workerData from '../freelanceData/workerData';
import { connect } from 'react-redux';
import { login, saveLoginData } from '../redux/action';


const LoginScreen = ({ navigation, login, saveLoginData }) => {

  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');


  const handleLogin = () => {
    // Assuming login is an action dispatched by Redux to update the state
    const user = workerData.find((account) => account.phoneNumber === phoneNumber && account.pin === pin);

    if (phoneNumber.length !== 10 || pin.length !== 6) {
      Alert.alert('Invalid Input', 'Please enter a valid phone number and 6-digit PIN.');
      return;
    }

    if (phoneNumber === user.phoneNumber && pin === user.pin) {
      console.log('Login Successful:', user);
      
      // Dispatch the login action
      login(user);
      
      // Save login data to Redux store after updating user information
      saveLoginData();
      navigation.navigate('App');
    } else {
      Alert.alert('Authentication Failed', 'Invalid phone number or PIN.');
    }
    console.log('Login:', phoneNumber, pin);
    console.log('Login:', user);
    console.log(workerData)

  };

  const handleRegister = () => {
  
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Background color */}
      <View style={styles.background} />

      <Image
        source={require('../image/whiteblue.png')} // Replace with your login logo
        style={styles.logo}
      />

      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={(text) => setPhoneNumber(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="6-digit PIN"
          keyboardType="numeric"
          secureTextEntry
          value={pin}
          onChangeText={(text) => setPin(text)}
        />

        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>

        <Text style={styles.registerText} onPress={handleRegister}>
          Don't have an account? Register here
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // backgroundColor: 'rgba(255, 255, 255, 0.3)', // Semi-transparent white background
  },
  logo: {
    position: 'absolute',
    bottom: 320,
    width: '80%',
    height: '50%',
  },
  title: {
    fontSize: 24,
    // fontWeight: 'bold',
    color: '#00B8FF',
    marginBottom: 10, 
  },
  formContainer: {
    alignItems: 'center',
    marginTop: 200,
  },
  input: {
    width: 250,
    borderBottomWidth: 1, // Underline style
    borderBottomColor: '#00B8FF', // Underline color
    height: 50,
    marginBottom: 15,
    // paddingLeft: 10,
    color: '#00B8FF',
  },
  button: {
    padding: 15,
    borderRadius: 25,
    marginTop: 40,
    width: 250,
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: '#00B8FF',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonTextLogin: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  registerText: {
    marginTop: 10,
    color: '#00B8FF',
  },
});
const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login(user)), // Update this line
  saveLoginData: () => dispatch(saveLoginData()), // Update this line
});

export default connect(null, mapDispatchToProps)(LoginScreen);