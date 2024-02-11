import React, { useState } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const CertificateDisplay = ({ certificateImages }) => {
  const [showAllImages, setShowAllImages] = useState(false);

  const displayedImages = showAllImages ? certificateImages : certificateImages.slice(0, 2);

  return (
    <View style={styles.container}>
      {displayedImages.map((image, index) => (
        <Image key={index} source={{ uri: image }} style={styles.image} />
      ))}

      {certificateImages.length > 2 && !showAllImages && (
        <TouchableOpacity onPress={() => setShowAllImages(true)}>
          <View style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View More</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
  },
  viewMoreButton: {
    backgroundColor: 'lightblue',
    padding: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  viewMoreText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CertificateDisplay;
