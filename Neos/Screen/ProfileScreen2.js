import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import CertificateScreen from './CertificateScreen';

// Import other components here

export default function App() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        {/* Logo, Search Bar, and Add New Skills Button */}
      </View>

      {/* Tabs */}
      <ScrollView horizontal style={styles.tabs} showsHorizontalScrollIndicator={false}>
        {/* Tab Components */}<CertificateScreen/>
      </ScrollView>

      {/* Scrollable Content */}
      <ScrollView style={styles.scrollableContent}>
        
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 60,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tabs: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
  scrollableContent: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});