import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import workerData from '../freelanceData/workerData';
import SkillCard from './skillCard';

const JobCategory = ({ category, onPress }) => (
  <TouchableOpacity onPress={onPress} style={{ padding: 10, borderWidth: 1, borderColor: '#ddd', borderRadius: 5, margin: 5 }}>
    <Text>{category}</Text>
  </TouchableOpacity>
);


const PopularCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const selectedWorkers = workerData.filter((worker) => worker.job === selectedCategory);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Popular Categories</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
        {['Product Design', 'Web Development', 'Mobile App Development', 'Graphic Design'].map((category) => (
          <JobCategory
            key={category}
            category={category}
            onPress={() => setSelectedCategory(category)}
          />
        ))}
      </ScrollView>
      <View>
        
        {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}> kiw</Text> */}
            <ScrollView horizontal style={{flexDirection:'row'}}>
                {workerData.map((data) => (
            <SkillCard key={data.id} {...data} />
            ))}
            </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
        </ScrollView>
        </View>

      {selectedCategory && (
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>{`${selectedCategory}`}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flexDirection: 'row' }}>
            {selectedWorkers.map((worker) => (
              <SkillCard key={worker.id} {...worker} />
            ))}
          </ScrollView>
        </View>
      )}


    </View>
  );
};

export default PopularCategories;





{/* <View style={styles.container}>
<View style={styles.header}>
  <Text style={styles.title}>Popular Categories</Text>
  <TouchableOpacity onPress={toggleCategories} style={styles.viewMoreButton}>
    <Text style={styles.viewMoreText}>View more</Text>
  </TouchableOpacity>
</View> */}