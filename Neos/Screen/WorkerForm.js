// WorkerForm.js

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image, Modal, FlatList, Alert } from 'react-native';
import workerData, { jobCategories } from '../freelanceData/workerData';
import tamp from '../freelanceData/tamp';

const WorkerForm = ({ navigation }) => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState(null);
  const [selectedJob, setSelectedJob] = useState(jobCategories[0]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePhotoUpload = () => {
    try {
      setPhoto(require('../freelanceData/photo/photoProfile.png'));
    } catch (error) {
      Alert.alert('Error', 'Failed to upload photo. Please try again.');
    }
  };

  const handleReadyToGo = () => {
    if (!name || !photo) {
      Alert.alert('Incomplete Form', 'Please fill in all fields.');
      return;
    }

    const newWorker = {
      role: 'worker',
      name,
      photo,
      job: selectedJob,
    };

    tamp.push(newWorker);
    workerData.push(tamp);

    navigation.navigate('Login');
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
        setSelectedJob(item);
        setModalVisible(false);
      }}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Worker Registration</Text>
  
      {photo && (
        <Image source={photo} style={styles.previewImage} resizeMode="cover" />
      )}
  
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TouchableOpacity style={styles.uploadButton} onPress={handlePhotoUpload}>
        <Text style={styles.buttonText}>Upload Photo</Text>
      </TouchableOpacity>
  
  
      <Text style={styles.label}>Select Job:</Text>
      <TouchableOpacity style={styles.jobCategoryButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>{selectedJob}</Text>
      </TouchableOpacity>
  

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <FlatList
            data={jobCategories}
            renderItem={renderItem}
            keyExtractor={(item) => item}
            style={styles.flatList}
          />
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
  
      <TouchableOpacity style={styles.readyButton} onPress={handleReadyToGo}>
        <Text style={styles.buttonText}>I'm Ready to go!</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    marginBottom: 20,
  },
  previewImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  label: {
    color: '#00B8FF',
    fontSize: 16,
    marginBottom: 10,
  },
  jobCategoryButton: {
    padding: 10,
    borderRadius: 15,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#00B8FF',
  },
  readyButton: {
    backgroundColor: '#00B8FF',
    padding: 15,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    marginBottom: 20,
    // bottom:100,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color:'#fff',
  },

  jobCategoryButton: {
    backgroundColor: '#00B8FF',
    padding: 15,
    borderRadius: 25,
    width: 250,
    alignItems: 'center',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  flatList: {
    backgroundColor: '#00B8FF',
    width: '80%',
    maxHeight: 200,
    borderRadius: 15,
  },
  dropdownItem: {
    padding: 25,
    borderBottomWidth: 0.5,
    borderBottomColor: '#fff',
  },
  closeButton: {
    padding: 15,
    backgroundColor: '#00B8FF',
    width: '80%',
    borderRadius: 25,
    marginTop: 20,
    alignItems: 'center',
  },
});

export default WorkerForm;
