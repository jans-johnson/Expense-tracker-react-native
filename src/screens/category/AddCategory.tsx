import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {RadioButton} from 'react-native-paper';

const AddCategory = () => {
  const [checked, setChecked] = React.useState('income');
  return (
    <Modal transparent={true} animationType="slide">
      <View
        style={{
          flex: 1,
          backgroundColor: 'rgba(52, 52, 52, 0.8)',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View style={styles.constainerStyle}>
          <TextInput
            editable
            onChangeText={text => () => {}}
            style={styles.textInput}
            placeholder="Category Name"
            placeholderTextColor={'grey'}
          />
          <View style={{flexDirection:"row", marginTop:10}}>
            <RadioButton
              value="income"
              status={checked === 'income' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('income')}
            />
            <Text style={styles.textStyle}>Income</Text>
            <RadioButton
              value="expense"
              status={checked === 'expense' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('expense')}
            />
            <Text style={styles.textStyle}>Expense</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Button title='Add'/>
            <Button title='Cancel'/>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 15,
    marginTop:10
  },
  constainerStyle: {
    alignItems: 'center',
    backgroundColor: 'white',
    marginVertical: 60,
    width: '90%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 7,
    elevation: 10,
    padding: 10,
  },
  textInput: {
    color: 'black',
    width: '80%',
    marginTop: 10,
    borderBottomWidth: 2,
    padding: 0,
  },
});
