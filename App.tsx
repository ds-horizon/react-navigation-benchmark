/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { JSStackNavigator } from './src/navigation/JSStackNavigator';
import { NativeStackNavigator } from './src/navigation/NativeStackNavigator';

const App = () => {
  const [navigationType, setNavigationType] = useState<'js' | 'native'>('js');

  const handleNavigationTypeChange = (type: 'js' | 'native') => {
    setNavigationType(type);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Navigation Benchmark</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                navigationType === 'js' && styles.activeButton,
              ]}
              onPress={() => handleNavigationTypeChange('js')}
            >
              <Text style={[
                styles.buttonText,
                navigationType === 'js' && styles.activeButtonText,
              ]}>
                JS Stack Navigator
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                navigationType === 'native' && styles.activeButton,
              ]}
              onPress={() => handleNavigationTypeChange('native')}
            >
              <Text style={[
                styles.buttonText,
                navigationType === 'native' && styles.activeButtonText,
              ]}>
                Native Stack Navigator
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {navigationType === 'js' ? (
          <JSStackNavigator />
        ) : (
          <NativeStackNavigator />
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
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  button: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#e0e0e0',
    minWidth: 150,
  },
  activeButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
  },
  activeButtonText: {
    color: '#fff',
  },
});

export default App;
