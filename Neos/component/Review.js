// Review.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Review = ({ username, rating, reviewText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.username}>{username}</Text>
      <Text style={styles.rating}>{`Rating: ${rating}/5`}</Text>
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  rating: {
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 5,
  },
  reviewText: {
    color: '#555',
  },
});

export default Review;
