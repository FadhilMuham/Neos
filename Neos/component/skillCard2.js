import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductCard = ({ id, name, productPhoto, job, userPhoto }) => {
  return (
    <View style={styles.container}>
      <Image source={productPhoto} style={styles.productPhoto} />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.job}>{job}</Text>
        <Text style={styles.id}>{`ID: ${id}`}</Text>
      </View>
      <Image source={userPhoto} style={styles.userPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    margin: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1, // Border width
    borderColor: '#ddd', // Border color
    width: 150, // Set a fixed width
    height: 200, // Set a fixed height
  },
  productPhoto: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
  },
  infoContainer: {
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  job: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  id: {
    fontSize: 12,
    color: '#777',
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default ProductCard;
