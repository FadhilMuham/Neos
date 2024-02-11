// OptionScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import workerData from '../freelanceData/workerData';
import tamp from '../freelanceData/tamp';

const OptionScreen = ({ navigation }) => {
  const handleUserOption = () => {
    // Add a new user entry to workerData
    const newUser = {
      role: 'user',
    };
    workerData.push(newUser);
    console.log(tamp)
    // Navigate to the user form screen
    navigation.navigate('UserForm');
  };

  const handleWorkerOption = () => {
    // Add a new worker entry to workerData
    const newWorker = {
      role: 'worker',
    };
    workerData.push(newWorker);
    console.log(workerData)

    // Navigate to the worker form screen
    navigation.navigate('WorkerForm');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose an Option</Text>

      <TouchableOpacity style={styles.optionButton} onPress={handleUserOption}>
        <Text style={styles.optionButtonText}>User</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={handleWorkerOption}>
        <Text style={styles.optionButtonText}>Worker</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  optionButton: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: 250,
    alignItems: 'center',
    borderRadius: 25,
  },
  optionButtonText: {
    color: '#00B8FF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default OptionScreen;
