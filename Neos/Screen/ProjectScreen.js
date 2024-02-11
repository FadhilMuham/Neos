// ProjectScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { projectData } from '../freelanceData/ProjectData';

const ProjectScreen = () => {
  const [savedProjects, setSavedProjects] = useState([]);

  const handleFinishProject = (projectId) => {
    // Implement your logic to mark the project as finished and update the savedProjects state
    const updatedSavedProjects = [...savedProjects, projectId];
    setSavedProjects(updatedSavedProjects);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ongoing Projects</Text>
      <FlatList
        data={projectData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.projectItem}>
            <Text style={styles.projectTitle}>{item.title}</Text>
            <Text style={styles.projectDescription}>{item.description}</Text>
            <Text style={styles.projectStatus}>{item.status}</Text>
            <Text style={styles.projectDeadline}>Deadline: {item.deadline}</Text>
            <Text style={styles.projectClient}>Client: {item.client}</Text>
            <Text style={styles.projectBudget}>Budget: {item.budget}</Text>
            {item.status === 'Ongoing' && (
              <TouchableOpacity
                style={styles.finishButton}
                onPress={() => handleFinishProject(item.id)}
              >
                <Text style={styles.finishButtonText}>Finish</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <View style={styles.saveAreaView}>
        <Text style={styles.saveAreaText}>Saved Projects: {savedProjects.join(', ')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  projectItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 8,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  projectDescription: {
    fontSize: 16,
    marginBottom: 8,
  },
  projectStatus: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#00B8FF',
    marginBottom: 8,
  },
  projectDeadline: {
    fontSize: 14,
    marginBottom: 4,
  },
  projectClient: {
    fontSize: 14,
    marginBottom: 4,
  },
  projectBudget: {
    fontSize: 14,
  },
  finishButton: {
    marginTop: 8,
    backgroundColor: '#00B8FF',
    padding: 8,
    borderRadius: 8,
  },
  finishButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  saveAreaView: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
  saveAreaText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProjectScreen;
