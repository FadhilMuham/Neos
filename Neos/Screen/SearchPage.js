import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import SearchBox from '../component/searchBox';
import RecomendService from '../component/recomendService';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const handleHire = (selectedWorker) => {
    // Implement your hiring logic here
    console.log('Hired worker:', selectedWorker);
    // You can navigate to the ProjectScreen or perform any other actions
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView>

      
      <View style={styles.container}>
        <SearchBox onHire={handleHire} />
        <RecomendService />
      </View>
      
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set background color to white
    padding: 0,
    marginBottom: 60,
  },
});

export default SearchScreen;
