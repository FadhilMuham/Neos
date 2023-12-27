import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SearchBox = () => {
  const navigation = useNavigation();
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Navigate to SearchScreen and pass the search query as a parameter
    navigation.navigate('Search', { query });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here"
        value={query}
        onChangeText={(text) => setQuery(text)}
        onSubmitEditing={handleSearch}
      />

      <TouchableOpacity onPress={handleSearch}>
        <Ionicons
          name="search"
          size={20}
          color="#333"
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    padding: 0,
    margin: 0,
  },
  icon: {
    marginLeft: 15,
  },
});

export default SearchBox;
