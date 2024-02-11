import React from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import { Card } from 'react-native-paper';

const jobCategories = [
  'Product Design',
  'Web Development',
  'Mobile App Dev',
  'Graphic Design',
];

const PopularCategories = ({ onSelectCategory }) => {
  const renderCategoryItem = ({ item }) => (
    <Card style={styles.categoryCard}>
      <Card.Cover source={getImageSource(item)} style={styles.categoryImage} />
      <Card.Content>
        <Text style={styles.categoryName} onPress={() => onSelectCategory(item)}>
          {item}
        </Text>
      </Card.Content>
    </Card>
  );

  const getImageSource = (category) => {
    switch (category) {
      case 'Product Design':
        return require('../image/ProductDesign.png');
      case 'Web Development':
        return require('../image/WebDev.png');
      case 'Mobile App Dev':
        return require('../image/AppDev.png');
      case 'Graphic Design':
        return require('../image/GraphicDesign.png');
      default:
        return require('../image/DefaultCategory.jpg');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Categories</Text>
      <FlatList
        data={jobCategories}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
    padding: 15,
    backgroundColor: 'white', // Set background color to whites
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  categoryList: {
    margin: 10,
  },
  categoryCard: {
    marginRight: 15,
    borderRadius: 20,
    backgroundColor:'#00B8FF',
    elevation: 10, // Add elevation for the card shadow
    marginBottom: 15
  },
  categoryImage: {
    width: 210,
    height: 210, // Adjust the height to make the photo bigger
    borderRadius: 15,
    overflow: 'hidden',
  },
  categoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginTop: 5,
  },
});



export default PopularCategories;
