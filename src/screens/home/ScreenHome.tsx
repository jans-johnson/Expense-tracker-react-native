import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenCategory from '../category/ScreenCategory';
import ScreenTransactions from '../expenses/ScreenTransactions';

const Tab = createBottomTabNavigator();

const ScreenHome = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Transactions" component={ScreenTransactions} />
      <Tab.Screen name="Categories" component={ScreenCategory} />
    </Tab.Navigator>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({});
