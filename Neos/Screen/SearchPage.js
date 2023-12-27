// // SearchScreen.js

// import React, { useState } from 'react';
// import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

// const SearchScreen = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = () => {
//     // Perform your search logic here (e.g., fetch data from an API)
//     // For this example, let's just filter an array of sample data

//     const sampleData = [
//       { id: '1', title: 'Result 1' },
//       { id: '2', title: 'Result 2' },
//       { id: '3', title: 'Result 3' },
//       // Add more sample data as needed
//     ];

//     const filteredResults = sampleData.filter(item =>
//       item.title.toLowerCase().includes(searchQuery.toLowerCase())
//     );

//     setSearchResults(filteredResults);
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter search query"
//         value={searchQuery}
//         onChangeText={text => setSearchQuery(text)}
//         onSubmitEditing={handleSearch}
//       />

//       <FlatList
//         data={searchResults}
//         keyExtractor={item => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.resultItem}>
//             <Text>{item.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 16,
//     paddingHorizontal: 8,
//   },
//   resultItem: {
//     padding: 16,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
// });

// export default SearchScreen;

// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList } from 'react-native';
// import workerData from '../freelanceData/workerData';
// import SkillCard from '../component/skillCard';

// const SearchScreen = ({ route }) => {
//   const [filteredWorkers, setFilteredWorkers] = useState([]);
//   const { category } = route.params;

//   useEffect(() => {
//     // Filter workers based on the selected category
//     const filtered = workerData.filter((worker) => worker.job === category);
//     setFilteredWorkers(filtered);
//   }, [category]);

//   return (
//     <View>
//       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{`Results for ${category}`}</Text>

//       <FlatList
//         data={filteredWorkers}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => <SkillCard {...item} />}
//       />
//     </View>
//   );
// };

// export default SearchScreen;

import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import workerData from '../freelanceData/workerData';
import SkillCard from '../component/skillCard';
import SearchBox from '../component/searchBox';

const SearchScreen = () => {

  return (
    <View style={styles.container} >
      <SearchBox/>
    </View>
  )
 }  

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
    width: '100%',
    height:'10%',
  },

}); 

export default SearchScreen;
