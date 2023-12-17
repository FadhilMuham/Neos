import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SearchBox = ({}) => {
    // onSearch
//   const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Perform the search with the query
    // onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search here"
        // value={query}
        // onChangeText={(text) => setQuery(text)}
        // onSubmitEditing={handleSearch}
      />
      <Icon
        name="search"
        size={20}
        color="#333" // Change the color as needed
        // onPress={handleSearch}
        style={styles.icon}
      />
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
