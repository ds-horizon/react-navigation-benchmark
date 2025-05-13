import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Switch,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { PerformanceTracker } from '@d11/marco';

type ScreenBNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ScreenB'>;

// Sample data for the list
const sampleData = [
  { id: '1', title: 'Item 1', description: 'Description for item 1' },
  { id: '2', title: 'Item 2', description: 'Description for item 2' },
  { id: '3', title: 'Item 3', description: 'Description for item 3' },
  { id: '4', title: 'Item 4', description: 'Description for item 4' },
  { id: '5', title: 'Item 5', description: 'Description for item 5' },
];

interface ScreenBProps {
  navigationType: 'js' | 'native';
}

export const ScreenB: React.FC<ScreenBProps> = ({ navigationType }) => {
  const navigation = useNavigation<ScreenBNavigationProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleGoBack = () => {
    navigation.navigate('ScreenA', { fromScreenB: true });
  };

  const toggleItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  useEffect(() => {
    PerformanceTracker.track('Component_B_Mounted', Date.now());
  }, []);
  

  const renderItem = ({ item }: { item: typeof sampleData[0] }) => (
    <TouchableOpacity 
      style={[
        styles.listItem,
        selectedItems.includes(item.id) && styles.selectedItem
      ]}
      onPress={() => toggleItem(item.id)}
    >
      <View style={styles.itemContent}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
      <View style={styles.itemIndicator}>
        {selectedItems.includes(item.id) && (
          <View style={styles.checkmark} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <PerformanceTracker tagName={'End_Navigation'} style={styles.container} >
      <ScrollView style={styles.screen}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Complex Screen B</Text>
          <Text style={styles.navType}>Navigation Type: {navigationType}</Text>
          <View style={styles.darkModeToggle}>
            <Text>Dark Mode</Text>
            <Switch
              value={isDarkMode}
              onValueChange={setIsDarkMode}
            />
          </View>
        </View>

        {/* Search Section */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search items..."
            value={searchText}
            onChangeText={setSearchText}
          />
          <TouchableOpacity 
            style={styles.searchButton}
            onPress={() => setIsLoading(!isLoading)}
          >
            <Text style={styles.buttonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Loading Indicator */}
        {isLoading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#007AFF" />
            <Text style={styles.loadingText}>Loading...</Text>
          </View>
        )}

        {/* List Section */}
        <View style={styles.listContainer}>
          <Text style={styles.sectionTitle}>Select Items</Text>
          <FlatList
            data={sampleData}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          <Text style={styles.statsTitle}>Selection Stats</Text>
          <Text style={styles.statsText}>
            Selected Items: {selectedItems.length} of {sampleData.length}
          </Text>
        </View>
      </ScrollView>
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
  },
  screen: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  header: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navType: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  darkModeToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  searchContainer: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 8,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: '#666',
  },
  listContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  listItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#e3f2fd',
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  itemDescription: {
    color: '#666',
  },
  itemIndicator: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkmark: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#007AFF',
  },
  statsContainer: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    marginTop: 20,
  },
  statsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  statsText: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 8,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
