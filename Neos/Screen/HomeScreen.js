import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, TextInput } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SlidingBanner from '../component/banner/slideBanner';
import PopularCategories from '../component/popularCaegories';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import SlidingCoupon from '../component/coupon/coupon';
import Welcome from '../component/welcome';

const Tab = createBottomTabNavigator();

const HomeScreen = () => {
  const handleSelectWorker = (worker) => {
    // Implement your logic when a worker is selected
    console.log('Selected Worker:', worker);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryCard}>
      {/* <Icon name={freelanceData.icon} size={20} color="#2C3E50" /> */}
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Welcome />
      <ScrollView style={styles.sub} vertical showsVerticalScrollIndicator={false}>
        <SlidingBanner />
        <PopularCategories onSelectWorker={handleSelectWorker} />
        <SlidingCoupon title="Available Coupons" />
        {/* <RecomendService /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white', // Set background color to white
    padding: 0,
    width: '100%',
    height: '100%', // Set height to 100% to fill the entire screen
    marginBottom: 60
  },
  sub: {
    flex: 1,
    padding: 15,
    width: '100%',
  },
});

export default HomeScreen;
