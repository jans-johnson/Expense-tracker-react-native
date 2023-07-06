import React, {useState} from 'react';
import {View, Text, ToastAndroid} from 'react-native';
import {FAB} from 'react-native-paper';

interface FloatingProps {
  fun: () => void;
}

const FloatingActionButton = ({fun}: FloatingProps) => {
  return (
    <View style={{flex: 1}}>
      <FAB
        style={{
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          borderRadius: 30,
        }}
        label="+"
        onPress={fun}
      />
    </View>
  );
};
export default FloatingActionButton;
