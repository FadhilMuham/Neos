// RegisterScreen.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Alert } from 'react-native';
import workerData from '../freelanceData/workerData';


const RegisterScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');

  const handleRegister = () => {
    // Input validation
    if (phoneNumber.length !== 10 || pin.length !== 6 || pin !== confirmPin) {
      Alert.alert('Invalid Input', 'Please enter valid phone number and matching 6-digit PINs.');
      return;
    }

    // Generate a new id (assuming id is just a unique number)
    const newId = workerData.length + 1;

    // Check if the user with the same phone number already exists
    const userExists = workerData.some((account) => account.phoneNumber === phoneNumber);
    if (userExists) {
      Alert.alert('User Exists', 'An account with this phone number already exists.');
      return;
    }

    // Update the original workerData array
    workerData.push({ id: newId, phoneNumber, pin });
    console.log('Updated workerData:', workerData);

    // You have successfully registered, navigate to OptionScreen
    navigation.navigate('Option');
  };

  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
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
        <Text style={styles.title}>Register</Text>

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

        <TextInput
          style={styles.input}
          placeholder="Confirm PIN"
          keyboardType="numeric"
          secureTextEntry
          value={confirmPin}
          onChangeText={(text) => setConfirmPin(text)}
        />

        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegister}>
          <Text style={styles.buttonTextRegister}>Register</Text>
        </TouchableOpacity>

        <Text style={styles.loginText} onPress={handleLogin}>
          Already have an account? Login here
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
    bottom: 350,
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
  registerButton: {
    backgroundColor: '#00B8FF',
    borderColor: '#fff',
    borderWidth: 1,
  },
  buttonTextRegister: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  loginText: {
    marginTop: 10,
    color: '#00B8FF',
  },
});

export default RegisterScreen;
