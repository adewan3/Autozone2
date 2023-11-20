import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigationTypes'; // Adjust the import path as needed

// Define the navigation prop type for the HomeScreen
type HomeNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
  // Now we're telling the `useNavigation` hook to use the `RootStackParamList` type
  const navigation = useNavigation<HomeNavigationProp>();

  return (
    <View style={styles.container}>
      <Button title="Select Items" onPress={() => navigation.navigate('ModalNavigator')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;