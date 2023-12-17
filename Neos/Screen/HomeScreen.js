import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchBox from '../component/searchBox';
import SlidingBanner from '../component/banner/slideBanner';
import PopularCategories from '../component/popularCaegories';
import { ScrollView } from 'react-native-gesture-handler';
import RecomendService from '../component/recomendService';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {


  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      {/* <Icon name={freelanceData.icon} size={20} color="#2C3E50" /> */}
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
   
      <SearchBox/>

      <ScrollView vertical showsVerticalScrollIndicator={false} >

          <SlidingBanner/>

          <PopularCategories/>

          <RecomendService/>


      </ScrollView>
        
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    padding: 20,
    width: '100%',
    height:'10%',
  },

});

export default HomeScreen;
