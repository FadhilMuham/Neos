// CertificateScreen.js
import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

const CertificateScreen = ({ user }) => {
  if (!user) {
    // Redirect or show login screen if the user is not logged in
    return (
      <View style={styles.container}>
        <Text>Please log in to view certificates.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.certificatesContainer}>
        <Text style={styles.title}>Certificates</Text>
        {user.certificates.map((certificate, index) => (
          <View key={index} style={styles.certificateItem}>
            <Image source={certificate.photo} style={styles.certificateImage} />
            <Text style={styles.certificateTitle}>{certificate.title}</Text>
            <Text style={styles.issuingOrganization}>{certificate.issuingOrganization}</Text>
            <Text style={styles.dateEarned}>Date Earned: {certificate.dateEarned}</Text>
          </View>
        ))}
        {user.certificates.length === 0 && (
          <Text style={styles.noCertificates}>No certificates available.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  certificatesContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  certificateItem: {
    marginBottom: 20,
  },
  certificateImage: {
    width: '100%',
    height: 150,  // Adjust the height to make it smaller
    borderRadius: 10,
    marginBottom: 10,
  },
  certificateTitle: {
    fontSize: 16,  // Adjust the font size
    fontWeight: 'bold',
    marginBottom: 5,
  },
  issuingOrganization: {
    fontSize: 12,  // Adjust the font size
    color: '#555',
    marginBottom: 5,
  },
  dateEarned: {
    fontSize: 10,  // Adjust the font size
    color: '#888',
  },
  noCertificates: {
    fontSize: 14,  // Adjust the font size
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(CertificateScreen);
