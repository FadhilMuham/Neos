// SlidingBanner.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';

const bannerImages = [
  require('./banner2.png'),
  require('./banner3.png'),
  require('./banner4.png'),
  // Add more image paths as needed
];

const SlidingBanner = () => {
  return (
    <View style={styles.banner}>
        <Swiper autoplay={true} loop={true} showsPagination={true} showsButtons={false}>
          {bannerImages.map((image, index) => (
            <View key={index}>
              <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
          ))}
        </Swiper>
      </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 15,
    height: '20%',
  },
});

export default SlidingBanner;
