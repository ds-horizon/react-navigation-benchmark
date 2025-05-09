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
      PerformanceTracker.track(`Transition_B_to_A_End_${navigationType}`, Date.now());
      navigation.setParams({ fromScreenB: undefined });
    }
    PerformanceTracker.track(`ScreenA_Mounted_${navigationType}`, Date.now());
  }, [route.params, navigationType]);

  const handleNavigateToB = () => {
    PerformanceTracker.track(`Transition_A_to_B_Start_${navigationType}`, Date.now());
    navigation.navigate('ScreenB');
  };

  return (
    <PerformanceTracker tagName={`ScreenA_Loaded_${navigationType}`} style={styles.container}>
      // <View >
        <Text style={styles.title}>Screen ABC</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={handleNavigateToB}
        >
          <Text style={styles.buttonText}>Go to Screen B</Text>
        </TouchableOpacity>
      // </View>
    </PerformanceTracker>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 40,
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
}); 