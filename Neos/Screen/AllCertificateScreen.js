// AllCertificatesScreen.js
import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const AllCertificatesScreen = ({ certificates }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {certificates.map((certificate, index) => (
        <View key={index} style={styles.certificateContainer}>
          <Image source={certificate.photo} style={styles.certificateImage} />
          <Text style={styles.certificateTitle}>{certificate.title}</Text>
          <Text style={styles.certificateOrganization}>{certificate.issuingOrganization}</Text>
          <Text style={styles.certificateDate}>{certificate.dateEarned}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  certificateContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  certificateImage: {
    width: 200,
    height: 150,
    borderRadius: 5,
  },
  certificateTitle: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  certificateOrganization: {
    marginTop: 5,
    fontSize: 16,
    color: '#555',
  },
  certificateDate: {
    marginTop: 5,
    fontSize: 14,
    color: '#777',
  },
});

export default AllCertificatesScreen;
