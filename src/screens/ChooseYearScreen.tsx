import React from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalStackParamList } from '../types/navigationTypes';
import { styles } from '../styles';

type ChooseYearNavigationProp = StackNavigationProp<ModalStackParamList, 'ChooseYear'>;

const ChooseYearScreen: React.FC = () => {
  const navigation = useNavigation<ChooseYearNavigationProp>();

  const years = [];
  for (let year = 2024; year >= 1995; year--) {
    years.push(year.toString());
  }

  const onYearPress = (year: string) => {
    navigation.navigate('ChooseMake', { year });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
          <Text style={styles.closeButtonText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose Year</Text>
        <View style={styles.spacer} />
      </View>

      <CustomNavigationBar currentStep="Year"/>

      <ScrollView>
        {years.map((year, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.yearItem} 
            onPress={() => onYearPress(year)}
          >
            <Text style={styles.yearText}>{year}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};



export default ChooseYearScreen;
