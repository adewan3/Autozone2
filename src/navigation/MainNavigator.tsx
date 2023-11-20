import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList, ModalStackParamList } from '../types/navigationTypes';
import HomeScreen from '../screens/HomeScreen';
import ChooseYearScreen from '../screens/ChooseYearScreen';
import ChooseMakeScreen from '../screens/ChooseMakeScreen';
import ChooseModelScreen from '../screens/ChooseModelScreen';
import ChooseEngineScreen from '../screens/ChooseEngine';

const RootStack = createStackNavigator<RootStackParamList>();
const ModalStack = createStackNavigator<ModalStackParamList>();

const ModalNavigator: React.FC = () => (
  <ModalStack.Navigator screenOptions={{ headerShown: false }}>
    <ModalStack.Screen name="ChooseYear" component={ChooseYearScreen} />
    <ModalStack.Screen name="ChooseMake" component={ChooseMakeScreen} />
    <ModalStack.Screen name="ChooseModel" component={ChooseModelScreen} />
    <ModalStack.Screen name="ChooseEngine" component={ChooseEngineScreen} />
  </ModalStack.Navigator>
);

const MainNavigator: React.FC = () => (
  <RootStack.Navigator screenOptions={{presentation:'modal'}}>
    <RootStack.Screen name="Home" component={HomeScreen} />
    <RootStack.Screen name="ModalNavigator" component={ModalNavigator} options={{ headerShown: false }} />
  </RootStack.Navigator>
);

export default MainNavigator;