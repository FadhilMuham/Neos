// ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const SkillCard = ({ id, name, productPhoto, job, userPhoto }) => {
  return (
    <View style={styles.container}>
      <Image source={productPhoto} style={styles.productPhoto} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{job}</Text>
        <Text style={styles.job}>{name}</Text>
        <Text style={styles.id}>{`ID: ${id}`}</Text>
      </View>
      <Image source={userPhoto} style={styles.userPhoto} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'left',
    justifyContent:'flex-start',
    padding: 15,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  productPhoto: {
    width: 80,
    height: 80,
    borderRadius: 4,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  id: {
    fontSize: 12,
    color: '#555',
  },
  job: {
    fontSize: 14,
    color: '#333',
  },
});

export default SkillCard;
