import React from 'react';
import { View, Image, StyleSheet, Dimensions, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { dummyCoupons } from './couponDummy';

const { height } = Dimensions.get('window');
const bannerHeight = height * 0.3;

const SlidingCoupon = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Coupons</Text>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true}>
        {dummyCoupons.map((image, index) => (
          <View key={index} style={styles.slide}>
            <Image source={image} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: bannerHeight + 40, // Adjusted for the title height
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
  },
});

export default SlidingCoupon;
