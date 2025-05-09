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
      <Text style={styles.navType}>
        {`NavigationType: ${navigationType === 'js' ? 'JS Stack Navigation' : 'Native Stack Navigation'}`}
      </Text>
      <Text style={styles.title}>Screen B</Text>
      <Text style={styles.subtitle}>
        This screen is used to benchmark navigation performance. Use the button below to go back to Screen A and measure transition times.
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleGoBack}
      >
        <Text style={styles.buttonText}>Go to Screen A</Text>
      </TouchableOpacity>
    </PerformanceTracker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 8,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  navType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
}); 