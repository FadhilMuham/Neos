import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const handleLogin = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  const handleRegister = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      {/* Background color with opacity */}
      <View style={styles.background} />

      <Image
        source={require('../image/1.png')}
        style={styles.logo}
      />

      <View style={styles.formContainer}>
      <Text style={styles.title}>Turn your hobby into money</Text>

        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
          <Text style={styles.buttonTextLogin}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={handleRegister}>
          <Text style={styles.buttonTextRegister}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00B8FF',
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
  logo:{
    position: 'absolute',
    // bottom: 10,
    top: 30,
    width:'80%',
    height:'50%'
  },
  title: {
    fontSize: 20,
    // fontWeight: 'bold',
    color: '#fff',
    marginBottom: 0,
  },
  formContainer: {
    alignItems:'center',
    marginTop: 220,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 250, // Adjust the width as needed
    alignItems: 'center',
    borderRadius: 25,
  },
  loginButton: {
    backgroundColor: 'rgba(255, 255, 255, 0)', // Transparent white background
    borderColor: '#fff', // White border color
    borderWidth: 1, // Border width
  },
  registerButton: {
    backgroundColor: '#fff', // White background
  },
  buttonTextLogin: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonTextRegister: {
    color: '#3498db',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default WelcomeScreen;
