// SearchBox.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import workerData from '../freelanceData/workerData';

const jobCategories = ['All', 'Product Design', 'Web Development', 'Mobile App Dev', 'Graphic Design'];

const SearchBox = ({ onHire }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearch = (text) => {
    const filtered = workerData.filter(
      (item) =>
        (selectedCategory === 'All' || item.job === selectedCategory) &&
        (text.trim() === '' ||
          item.name.toLowerCase().includes(text.toLowerCase()) ||
          item.job.toLowerCase().includes(text.toLowerCase()))
    );

    setSearchQuery(text);
    setFilteredData(filtered);
  };

  const handleCategoryPress = (category) => {
    setSelectedCategory(category);
    handleSearch(searchQuery); // Refresh the search with the selected category
  };

  const handleHire = (worker) => {
    // Hire the selected worker
    if (onHire) {
      onHire(worker);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search by name or job"
            value={searchQuery}
            onChangeText={handleSearch}
            style={styles.input}
          />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
          {jobCategories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCategoryPress(category)}
              style={[
                styles.categoryButton,
                { backgroundColor: selectedCategory === category ? '#00B8FF' : '#fff' },
              ]}
            >
              <Text style={{ color: selectedCategory === category ? '#fff' : '#333' }}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {searchQuery.length > 0 && (
          <FlatList
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Image source={item.photo} style={styles.cardImage} />
                <View style={styles.textContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.job}>{item.job}</Text>
                  <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
                </View>
                <TouchableOpacity onPress={() => handleHire(item)} style={styles.hireButton}>
                  <Text style={styles.hireButtonText}>Hire</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 16,
  },
  searchBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    padding: 8,
  },
  categoryContainer: {
    marginVertical: 0,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#00B8FF',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    elevation: 3,
  },
  textContainer: {
    flex: 1,
    marginLeft: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  job: {
    fontSize: 14,
    color: '#555',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#555',
  },
  cardImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  hireButton: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  hireButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SearchBox;
