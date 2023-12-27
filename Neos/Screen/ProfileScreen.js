// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { MapStateToProps } from 'react-redux';
// import { useEffect } from 'react/cjs/react.production.min';

const ProfileScreen = ({ user }) => {
  // useEffect(() => {
  //   console.log('User Data (ProfileScreen):', user);
  // }, [user]);
  
  console.log('User:', user);
  // Assuming the user object is present in the Redux state
  if (!user) {
    // Handle the case where the user object is not available
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>User data not available. Please log in.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={user.photo} style={styles.profileImage} />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userInfo}>{`Phone: ${user.phoneNumber}`}</Text>
      <Text style={styles.userInfo}>{`Job: ${user.job}`}</Text>
      {/* Add more user information as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userInfo: {
    fontSize: 16,
    marginBottom: 10,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(ProfileScreen);
