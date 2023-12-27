// ProfileComponent.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileComponent = ({ worker }) => {
  return (
    <View style={styles.container}>
      <Image source={worker.photo} style={styles.photo} resizeMode="cover" />
      <Text style={styles.idText}>{`ID: ${worker.id}`}</Text>
      <Text style={styles.nameText}>{worker.name}</Text>
      <Text style={styles.jobText}>{`Job: ${worker.job}`}</Text>
      <Text style={styles.serviceText}>{`Services: ${worker.services.join(', ')}`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  idText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  jobText: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    color: '#777',
  },
});

export default ProfileComponent;
