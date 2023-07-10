import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ScreenCategory from '../category/ScreenCategory';
import ScreenTransactions from '../transactions/ScreenTransactions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/colors';

const Tab = createBottomTabNavigator();

const ScreenHome = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false,tabBarActiveTintColor:Colors.primary200}}>
      <Tab.Screen name="Transactions" component={ScreenTransactions} options={{
      tabBarLabel: 'Transactions',
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" size={size} color={color} />
      ),
    }}/>
      <Tab.Screen name="Categories" component={ScreenCategory} options={{
      tabBarLabel: 'Categories',
      tabBarIcon: ({ color, size }) => (
        <Icon name="category" size={size} color={color} />
      ),
    }}/>
    </Tab.Navigator>
  );
};

export default ScreenHome;

const styles = StyleSheet.create({});
