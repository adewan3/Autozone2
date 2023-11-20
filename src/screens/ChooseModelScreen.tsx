import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalStackParamList } from '../types/navigationTypes';
import { styles } from '../styles';

type ChooseModelNavigationProp = StackNavigationProp<ModalStackParamList, 'ChooseModel'>;
type ChooseModelRouteProp = RouteProp<ModalStackParamList, 'ChooseModel'>;

const ChooseModelScreen: React.FC = () => {
  const navigation = useNavigation<ChooseModelNavigationProp>();
  const route = useRoute<ChooseModelRouteProp>();
  const { year, make } = route.params;
  const [models, setModels] = useState<{ Model_ID: number, Model_Name: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMake/${make}?format=json`);
        const data = await response.json();
        if (data.Results) {
          setModels(data.Results);
        }
      } catch (error) {
        Alert.alert(
          "Error", 
          "No models for this Make. Please try a new Make.",
          [{ text: "OK" }]
        );
      }
      finally{
        setLoading(false)
      }
    };

    fetchModels();
  }, [make]);

  const onBackPress = () => {
    navigation.navigate('ChooseMake', { year });
  };

  const onModelPress = (modelName: string) => {
    // Navigate to the next screen with year, make, and model
    navigation.navigate('ChooseEngine', { year, make, model: modelName }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>

        <Text style={styles.headerTitle}>Choose Model</Text>
        <Text style={styles.headerSubTitle}>{year} {make}</Text>

        </View>
        
        <View style={styles.spacer} />
      </View>

      <CustomNavigationBar currentStep="Model" />
      {
      
      loading ? ((<Text style={styles.noMakeText}>Loading...</Text>)):
      
      models.length>0 ? (<ScrollView>
        {models.map((model, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.modelItem}
            onPress={() => onModelPress(model.Model_Name)}
          >
            <Text style={styles.modelText}>{model.Model_Name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>):(<Text style={styles.noMakeText}>Sorry, no Make present for this year.</Text>)}
    </View>
  );
};


export default ChooseModelScreen;
