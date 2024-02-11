import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import workerData from '../freelanceData/workerData';
import SkillCard2 from './skillCard2';

const RecomendService = () => {
  const renderRecommendations = () => {
    return workerData.slice(0, 5).map((data) => (
      <SkillCard2 key={data.id} {...data} />
    ));
  };

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Recommend Services</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderRecommendations()}
      </ScrollView>
    </View>
  );
};

export default RecomendService;
