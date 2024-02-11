// DummyReviews.js
import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import Review from './Review';

const DummyReviews = () => {
  const dummyReviews = [
    {
      id: '1',
      username: 'John Doe',
      rating: 4,
      reviewText: 'Great service! I would highly recommend.',
    },
    {
      id: '2',
      username: 'Jane Smith',
      rating: 5,
      reviewText: 'Excellent work. Very professional!',
    },
    {
      id: '3',
      username: 'Bob Johnson',
      rating: 3,
      reviewText: 'Good, but could be better.',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reviews</Text>
      <FlatList
        data={dummyReviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Review username={item.username} rating={item.rating} reviewText={item.reviewText} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginLeft: 16,
  },
});

export default DummyReviews;
