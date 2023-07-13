import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenHome from './src/screens/home/ScreenHome';

import {StyleSheet, Dimensions, ToastAndroid, View} from 'react-native';
import { categoryValues, getCategoryData } from './src/db/CategoryDb';
import Colors from './src/constants/colors';
import EditTransactionsScreen from './src/screens/EditTransactionsScreen';

const Stack = createNativeStackNavigator()

function App(): JSX.Element {
  getCategoryData()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation}) => (
            <Appbar.Header elevated style={{backgroundColor:Colors.primary200, paddingLeft:10}}>
              <Appbar.Content title="Expense Tracker" color='white' />
            </Appbar.Header>
          ),
        }}>
        <Stack.Screen name="Home" component={ScreenHome} />
        <Stack.Screen name='Edit' component={EditTransactionsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
