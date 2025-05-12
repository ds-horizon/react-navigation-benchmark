import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigator } from './src/navigation/NativeStackNavigator';
import { PerformanceTracker } from '@d11/marco';

PerformanceTracker.configure({ persistToFile: true });

const App = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Navigation Benchmark</Text>
          <Text style={styles.navType}>NavigationType: Native Stack Navigation</Text>
        </View>
        <NativeStackNavigator navigationType="native" />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  navType: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
});

export default App; 