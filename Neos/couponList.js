// App.js
import React from 'react';
import { View, ScrollView } from 'react-native';
import { Coupon, dummyData } from './coupon';

const CouponList = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {dummyData.map((coupon, index) => (
          <Coupon key={index} {...coupon} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default CouponList;
