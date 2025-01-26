import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image source={require('../assets/userImage.jpg')} style={styles.profileImage} />
      <Text style={styles.name}>Hazel Kate L. Butlay</Text>
      <Text style={styles.jobTitle}>React Native Developer</Text>
      <View style={styles.statsContainer}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>01</Text>
          <Text style={styles.statLabel}>Apps Deployed</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>01</Text>
          <Text style={styles.statLabel}>Clients Satisfied</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>03</Text>
          <Text style={styles.statLabel}>Experience Years</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Adaptable</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Altruistic</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Resilient</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} placeholder="What's on your mind?" />
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingBottom: 20,
  },
  header: {
    width: '100%',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginVertical: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 30,
    marginTop: 25,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#3478f6',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  button: {
    backgroundColor: '#d1d8ff',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  input: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginTop: 50,
  },
  logoutButton: {
    backgroundColor: '#5e00d7',
    width: '90%',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  logoutButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  version: {
    fontSize: 14,
    color: '#999',
    marginTop: 20,
  },
});
