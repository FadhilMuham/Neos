// Welcome.js
import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

const Welcome = ({ user }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome{user ? `, ${user.name}!` : '!'}</Text>
      </View>
      {user && (
        <Image source={user.photo} style={styles.profileImage} />
      )}
    </View>
  );
};

const { width } = Dimensions.get('window'); // Get the screen width

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Use row direction for side-by-side placement
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width, // Make the width same as the screen
    backgroundColor: '#00B8FF', // Change background color
    paddingHorizontal: 20, // Add horizontal padding
    paddingVertical: 20, // Add vertical padding
    paddingTop: 20, // Add top padding
    borderBottomRightRadius: 50
    
  },
  textContainer: {
    flex: 1, // Take up remaining space
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff', // Change text color to white
  },
  profileImage: {
    width: 40, // Set the desired width
    height: 40, // Set the desired height
    borderRadius: 20, // Make it circular
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Welcome);
