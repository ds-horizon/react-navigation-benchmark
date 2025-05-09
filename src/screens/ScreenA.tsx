import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PerformanceTracker } from '@d11/marco';

type ScreenANavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenA'>;

export const ScreenA = ({ navigationType }: { navigationType: 'js' | 'native' }) => {
  const navigation = useNavigation<ScreenANavigationProp>();
  const route = useRoute();

  useEffect(() => {
    if (route.params && (route.params as any).fromScreenB) {
      PerformanceTracker.track(`${navigationType}_Transition_B_to_A_End`, Date.now());
      navigation.setParams({ fromScreenB: undefined });
    }
    PerformanceTracker.track(`${navigationType}ScreenA_Mounted`, Date.now());
  }, [route.params, navigationType]);

  const handleNavigateToB = () => {
    PerformanceTracker.track(`${navigationType}_Transition_A_to_B_Start`, Date.now());
    navigation.navigate('ScreenB');
  };

  return (
    <PerformanceTracker tagName={`${navigationType}_ScreenA_Loaded`} style={styles.container}>
        <Text style={styles.navType}>
          {`NavigationType: ${navigationType === 'js' ? 'JS Stack Navigation' : 'Native Stack Navigation'}`}</Text>
        <Text style={styles.title}>Screen A</Text>
        <Text style={styles.subtitle}>
          This screen is used to benchmark navigation performance. Use the button below to navigate to Screen B and measure transition times.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToB}
        >
          <Text style={styles.buttonText}>Go to Screen B</Text>
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