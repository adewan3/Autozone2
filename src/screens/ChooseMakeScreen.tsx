import React, { useEffect, useState } from 'react';
import { View, Button, StyleSheet, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { ModalStackParamList } from '../types/navigationTypes';
import { styles } from '../styles';

type ChooseMakeNavigationProp = StackNavigationProp<ModalStackParamList, 'ChooseMake'>;
type ChooseMakeRouteProp = RouteProp<ModalStackParamList, 'ChooseMake'>;

const ChooseMakeScreen: React.FC = () => {
  const navigation = useNavigation<ChooseMakeNavigationProp>();
  const route = useRoute<ChooseMakeRouteProp>();
  const { year } = route.params;
  const [makes, setMakes] = useState<{ MakeId: number, MakeName: string }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMakes = async () => {
      try {
        const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForManufacturerAndYear/mer?year=${year}&format=json`);
        const data = await response.json();
        if (data.Results) {
          setMakes(data.Results);
        }
      } catch (error) {
        Alert.alert(
          "Error", 
          "No Make for this year. Please try again later.",
          [{ text: "OK" }]
        );
      } finally{
        setLoading(false);
      }
    };

    fetchMakes();
  }, [year]);

  const onBackPress = () => {
    navigation.navigate('ChooseYear');
  };

  const onMakePress = (makeName: string) => {
    navigation.navigate('ChooseModel', { year, make: makeName });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBackPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <View style={styles.titleContainer}>
        <Text style={styles.headerTitle}>Choose Make</Text>
        <Text style={styles.headerSubTitle}>{year}</Text>
        </View>
        <View style={styles.spacer} />
      </View>

      <CustomNavigationBar currentStep="Make" />
      {
        loading? (<Text style={styles.noMakeText}>Loading...</Text>):
      
      
      makes.length>0 ? (<ScrollView>
        {makes.map((make, index) => (
          // <Button key={index} title={make.MakeName} onPress={() => onMakePress(make.MakeName)} />
          <TouchableOpacity 
          key={index} 
          style={styles.makeItem}
          onPress={()=> onMakePress(make.MakeName)}
          >
            <Text style={styles.makeText}>{make.MakeName}</Text>

          </TouchableOpacity>
        ))}
      </ScrollView>):(<Text style={styles.noMakeText}>Sorry, no Make present for this year.</Text>)}
      {/* <ScrollView>
        {years.map((year, index) => (
          <TouchableOpacity 
            key={index} 
            style={styles.yearItem} 
            onPress={() => onYearPress(year)}
          >
            <Text style={styles.yearText}>{year}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
    </View>
  );
};



export default ChooseMakeScreen;
