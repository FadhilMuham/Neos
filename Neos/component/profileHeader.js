import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Logo */}
      {/* <Image source={require('../image/2.png')} style={styles.logo} /> */}

      {/* Greeting and Edit Profile Button */}
      <View style={styles.greetingContainer}>
        <Text style={styles.greetingText}>Good Day</Text>
        <Text style={styles.usernameText}></Text>
      </View>
      
      {/* Spacer */}
      <View style={styles.spacer} />

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editProfileButton}>
        <Text style={styles.editProfileButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 50,
    backgroundColor: '#00B8FF', // Custom color
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    justifyContent: 'space-between', // Space evenly
  },
  logo: {
    width: 120,
    height: 30, // Adjusted height for a sleek look
    resizeMode: 'contain',
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  greetingText: {
    color: '#fff',
    fontSize: 14,
    marginRight: 4,
  },
  usernameText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  spacer: {
    flex: 1, // Takes up available space, creating a spacer
  },
  editProfileButton: {
    backgroundColor: '#3498DB', // Custom color
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  editProfileButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Header;
