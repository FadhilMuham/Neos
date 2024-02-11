// ProfileScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { saveLoginData } from '../redux/action';
import Header from '../component/profileHeader';
import SkillList from '../component/skillListProfile';
import CertificateScreen from './CertificateScreen';
import { ScrollView } from 'react-native-gesture-handler';
import DummyReviews from '../component/DummyReview';

const ProfileScreen = ({ user, saveLoginData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await saveLoginData();
      } catch (error) {
        setError('Error fetching user data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [saveLoginData]);

  const handleHirePress = () => {
    console.log('Hire button pressed');
  };

  const handleEditPress = () => {
    console.log('Edit button pressed');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#00B8FF" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  if (!user) {
    return (
      <View style={styles.container}>
        <Text>Please log in to view the profile.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <Image source={user.photo} style={styles.profileImage} />
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.job}>{user.job}</Text>
        </View>
        <SkillList skills={user.skills} />
        <DummyReviews/>
        <CertificateScreen />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  reviewsContainer: {
    marginTop: 16,
  },
  reviewsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flexGrow: 1,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  hireButton: {
    backgroundColor: '#00B8FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  job: {
    fontSize: 18,
    color: '#555',
    marginBottom: 16,
  },
});

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  saveLoginData: () => dispatch(saveLoginData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);
