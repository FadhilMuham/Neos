import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import Swiper from 'react-native-swiper';
import bannerImages from './banner';

const { height } = Dimensions.get('window');
const bannerHeight = height * 0.3;

const SlidingBanner = () => {
  return (
    <View style={styles.container}>
      <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} loop={true}>
        {bannerImages.map((image, index) => (
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
    height: bannerHeight,
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '80%',
    resizeMode: 'cover',
  },
});

export default SlidingBanner;
