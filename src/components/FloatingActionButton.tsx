import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {FAB} from 'react-native-paper';
import Colors from '../constants/colors';

interface FloatingProps {
  fun: () => void;
}

const FloatingActionButton = ({fun}: FloatingProps) => {
  return (
    <View style={{flex: 0}}>
      <FAB
        icon="plus"
        color='white'
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          borderRadius: 30,
          backgroundColor:Colors.primary200,
        }}
        onPress={fun}
      />
    </View>
  );
};
export default FloatingActionButton;
