import React from 'react';
import Counter from './src/Counter';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';


function App(): JSX.Element {
  const windowHeight = Dimensions.get('window').height;
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View style={{alignItems: "center", height:windowHeight, flex:1,justifyContent:'center'}}>
          <Counter/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});

export default App;
