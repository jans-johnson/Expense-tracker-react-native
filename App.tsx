import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Appbar} from 'react-native-paper';
import {createStackNavigator} from '@react-navigation/stack';
import ScreenHome from './src/screens/home/ScreenHome';

import {StyleSheet, Dimensions, ToastAndroid, View} from 'react-native';

const Stack = createStackNavigator();

function App(): JSX.Element {
  const windowHeight = Dimensions.get('window').height;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: ({navigation}) => (
            <Appbar.Header>
              <Appbar.Content title="Expense Tracker" />
            </Appbar.Header>
          ),
        }}>
        <Stack.Screen name="Home" component={ScreenHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
