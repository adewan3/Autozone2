import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ModalStackParamList } from '../types/navigationTypes';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import { StackNavigationProp } from '@react-navigation/stack';
import { styles } from '../styles';

// Assuming your navigation stack includes a 'ChooseEngine' route

type ChooseMakeNavigationProp = StackNavigationProp<ModalStackParamList, 'ChooseEngine'>;
type ChooseEngineRouteProp = RouteProp<ModalStackParamList, 'ChooseEngine'>;



const ChooseEngineScreen: React.FC = () => {
  const route = useRoute<ChooseEngineRouteProp>();
  const { year, make, model } = route.params;
  const navigation = useNavigation<ChooseMakeNavigationProp>();

  const onBackPress = () => {
    navigation.navigate('ChooseModel',{year,make});
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Final Screen</Text>
        <View style={styles.spacer} />
      </View>

      <CustomNavigationBar currentStep="Engine" />
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>Year: {year}</Text>
        <Text style={styles.infoText}>Make: {make}</Text>
        <Text style={styles.infoText}>Model: {model}</Text>
        {/* You can add more content or functionality here as needed */}
      </View>
    </View>
  );
};



export default ChooseEngineScreen;
