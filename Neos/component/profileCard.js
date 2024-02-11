import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProfileCard = ({ worker }) => {
    if (!worker) {
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Worker not found!</Text>
        </View>
      );
    }
  
    return (
      <View style={styles.container}>
        <Image source={worker.photo} style={styles.profileImage} />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameText}>{worker.name}</Text>
          <Text style={styles.jobText}>{worker.job}</Text>
          <Text style={styles.phoneNumberText}>Phone: {worker.phoneNumber}</Text>
          <Text style={styles.pinText}>PIN: {worker.pin}</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 15,
      marginBottom: 20,
      width: '80%',
      alignSelf: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    profileImage: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 15,
    },
    detailsContainer: {
      flex: 1,
    },
    nameText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
      color: '#2c3e50',
    },
    jobText: {
      fontSize: 14,
      color: '#7f8c8d',
      marginBottom: 5,
    },
    phoneNumberText: {
      fontSize: 12,
      color: '#7f8c8d',
      marginBottom: 3,
    },
    pinText: {
      fontSize: 12,
      color: '#7f8c8d',
      marginBottom: 3,
    },
    errorText: {
      fontSize: 16,
      color: 'red',
    },
  });
  
  export default ProfileCard;
