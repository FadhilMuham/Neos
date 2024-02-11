// SkillList.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const SkillList = ({ skills, onEditSkill }) => {
  const [editingSkill, setEditingSkill] = useState(null);

  const handleEditClick = (skill) => {
    setEditingSkill(skill);
    onEditSkill(skill); // Pass the skill to the parent component for handling
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.skillItem}>
            <Text style={styles.skillName}>{item.name}</Text>
            <Text style={styles.skillDescription}>{item.description}</Text>
            <Text style={styles.skillPriceRange}>Price Range: {item.priceRange}</Text>
            <TouchableOpacity onPress={() => handleEditClick(item)} style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3498DB',
  },
  skillItem: {
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    position: 'relative',
  },
  skillName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  skillDescription: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },
  skillPriceRange: {
    fontSize: 14,
    color: '#888',
    marginBottom: 8,
  },
  editButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: '#3498DB',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SkillList;
