// Coupon.js
import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Choose an appropriate icon

const dummyData = [
  {
    code: 'SAVE20',
    discount: 20,
    expirationDate: '2023-12-31',
  },
  {
    code: 'FREESHIP',
    discount: 15,
    expirationDate: '2023-11-30',
  },
  // Add more dummy data as needed
];

const Coupon = ({ code, discount, expirationDate }) => {
  return (
    <View style={styles.coupon}>
      <View style={styles.couponHeader}>
        <Icon name="tag" size={20} style={styles.couponIcon} />
        <Text style={styles.couponCode}>{code}</Text>
      </View>
      <Text>Discount: {discount}%</Text>
      <Text>Expires on: {expirationDate}</Text>
    </View>
  );
};

const styles = {
  coupon: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  couponHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  couponIcon: {
    marginRight: 5,
  },
  couponCode: {
    fontSize: 18,
  },
};

export { Coupon, dummyData };
