/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { PerformanceTracker } from '@wedesicooking/marco';
import { NativeStackNavigator } from './src/navigation/NativeStackNavigator';
import { JSStackNavigator } from './src/navigation/JSStackNavigator';

PerformanceTracker.configure({ persistToFile: true });

const App = () => {
  const useNativeNavigation = false



  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Navigation Benchmark</Text>
          <Text style={styles.navType}>
            NavigationType: {useNativeNavigation ? 'Native' : 'JS'} Stack Navigation
          </Text>
        </View>
        {useNativeNavigation ? (
          <NativeStackNavigator navigationType="native" />
        ) : (
          <JSStackNavigator navigationType="js" />
        )}
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
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
