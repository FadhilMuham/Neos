import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Header component
const Header = () => {
  return (
    <View style={styles.header}>
      {/* Add your logo, search bar, and "Add New Skills" button here */}
    </View>
  );
};

// Tab component
const Tab = ({ title, isActive }) => {
  return (
    <TouchableOpacity style={[styles.tab, isActive ? styles.activeTab : null]}>
      <Text style={styles.tabText}>{title}</Text>
    </TouchableOpacity>
  );
};

// ProfileCard component
const ProfileCard = ({ name, picture, bio, onEditClick }) => {
  return (
    <View style={styles.profileCard}>
      <Image source={{ uri: picture }} style={styles.profilePicture} />
      <Text style={styles.profileName}>{name}</Text>
      <Text style={styles.profileBio}>{bio}</Text>
      <TouchableOpacity onPress={onEditClick} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

// SkillsSection component
const SkillsSection = ({ skills }) => {
  return (
    <View style={styles.skillsSection}>
      {skills.map((skill, index) => (
        <View key={index} style={styles.skill}>
          <Text style={styles.skillName}>{skill.name}</Text>
          <Text style={styles.skillDescription}>{skill.description}</Text>
        </View>
      ))}
    </View>
  );
};

// CustomerReviews component
// NewArrivals component
// Certificates component
// Footer component

// Dashboard component
const Dashboard = () => {
  const user = {
    name: 'John Doe',
    picture: 'path/to/picture.jpg',
    bio: 'Bio goes here',
    skills: [
      { name: 'Guitar', description: 'Expert guitar lessons for...', id: 1 },
      { name: 'Dancing', description: 'Dancing lessons description...', id: 2 },
      // ...
    ],
  };

  return (
    <View style={styles.dashboard}>
      <Header />
      <View style={styles.content}>
        <View style={styles.tabs}>
          {/* Render your tabs here */}
          <Tab title="Dashboard" isActive={true} />
          <Tab title="My Projects" isActive={false} />
          {/* ... */}
        </View>
        <ProfileCard
          name={user.name}
          picture={user.picture}
          bio={user.bio}
          onEditClick={() => console.log('Edit profile clicked')}
        />
        <SkillsSection skills={user.skills} />
        {/* Render other components here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add your styles here
});

export default Dashboard;