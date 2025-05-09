import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ScreenANavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenA'>;

export const ScreenA = () => {
  const navigation = useNavigation<ScreenANavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen A</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ScreenB')}
      >
        <Text style={styles.buttonText}>Go to Screen B</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
}); 