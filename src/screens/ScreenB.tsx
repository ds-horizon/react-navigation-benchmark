import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PerformanceTracker } from '@d11/marco';

type ScreenBNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenB'>;

export const ScreenB = ({ navigationType }: { navigationType: 'js' | 'native' }) => {
  const navigation = useNavigation<ScreenBNavigationProp>();

  useEffect(() => {
    PerformanceTracker.track(`ScreenB_Mounted_${navigationType}`, Date.now());
    PerformanceTracker.track(`Transition_A_to_B_End_${navigationType}`, Date.now());
  }, [navigationType]);

  const handleGoBack = () => {
    PerformanceTracker.track(`Transition_B_to_A_Start_${navigationType}`, Date.now());
    navigation.navigate('ScreenA', { fromScreenB: true });
  };

  return (
    <PerformanceTracker tagName={`ScreenB_Loaded_${navigationType}`} style={styles.container}>

        <Text style={styles.title}>Screen B</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGoBack}
        >
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
    </PerformanceTracker>
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