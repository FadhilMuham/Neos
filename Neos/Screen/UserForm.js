// UserForm.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import workerData from '../freelanceData/workerData';
import tamp from '../freelanceData/tamp';

const UserForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);

  const handlePhotoUpload = () => {
    // Implement photo upload logic here (e.g., using ImagePicker)
    // For simplicity, let's assume it sets the photo state with a local image file
    setPhoto(require('../freelanceData/photo/photoProfile.png'));
  };

  const handleReadyToGo = () => {
    // Input validation
    if (!name || !photo) {
      Alert.alert('Incomplete Form', 'Please fill in all fields.');
      return;
    }

    // Add a new user entry to workerData
    const newUser = {
      role: 'user',
      name,
      photo,
    };
    tamp.push(newUser);
    workerData.push(tamp);

    // Navigate to the home screen
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Form</Text>

      {photo && (
        <Image source={photo} style={styles.previewImage} resizeMode="cover" />
      )}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />

      <TouchableOpacity style={styles.uploadButton} onPress={handlePhotoUpload}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.readyButton} onPress={handleReadyToGo}>
        <Text style={styles.buttonText}>I'm Ready to Go!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: '#00B8FF',
    marginBottom: 20,
  },
  input: {
    width: 250,
    borderBottomWidth: 1,
    borderBottomColor: '#00B8FF',
    height: 50,
    marginBottom: 20,
    color: '#00B8FF',
  },
  uploadButton: {
    backgroundColor: '#00B8FF',
    padding: 15,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
  },
  previewImage: {
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 75,
  },
  readyButton: {
    backgroundColor: '#00B8FF',
    padding: 15,
    borderRadius: 25,
    width: 250,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default UserForm;
