import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  currentStep: 'Year' | 'Make' | 'Model' | 'Engine';
}

const CustomNavigationBar: React.FC<Props> = ({ currentStep }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity> */}
      {/* Render steps with conditional styling based on currentStep */}
      <View style={styles.stepsContainer}>
        <Text style={currentStep === 'Year' ? styles.activeStep : styles.step}>Year</Text>
        <Text style={currentStep === 'Make' ? styles.activeStep : styles.step}>Make</Text>
        <Text style={currentStep === 'Model' ? styles.activeStep : styles.step}>Model</Text>
        <Text style={currentStep === 'Engine' ? styles.activeStep : styles.step}>Engine</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',  // Updated for even spacing
    paddingVertical: 15,  // Increased vertical padding
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',  // Light grey background
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',  // Subtle bottom border
  },
  closeButton: {
    padding: 10,
  },
  closeButtonText: {
    fontSize: 24,
    color: '#000',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',  // Ensure even spacing between steps
    flex: 1,
  },
  step: {
    marginHorizontal: 15,  // Increased margin for better spacing
    color: 'grey',
    fontSize: 16,  // Slightly increased font size
  },
  activeStep: {
    marginHorizontal: 15,
    color: 'black',
    fontSize: 18,  // Larger font size for active step
    fontWeight: 'bold',  // Bold font weight for active step
    textDecorationLine: 'underline',
  },
  // Add other styles as needed
});

export default CustomNavigationBar;