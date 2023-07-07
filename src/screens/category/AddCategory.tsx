import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Modal} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {categoryValues, insertCategory} from '../../db/CategoryDb';
import {CategoryType} from '../../models/CategoryModel';

const AddCategory = ({
  fabInvisible,
  updateData,
}: {
  fabInvisible: () => void;
  updateData: () => void;
}) => {
  const [checked, setChecked] = React.useState('income');
  const [categoryName, setCategoryName] = React.useState('');
  return (
    <Modal transparent={true} animationType="slide">
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.15)', 'rgba(201, 201, 201, 1)']}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View style={styles.constainerStyle}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              name="format-letter-case"
              size={30}
              color={'grey'}
              style={{marginTop: 10, marginRight: 10}}
            />
            <TextInput
              editable
              onChangeText={(text: string) => setCategoryName(text)}
              style={styles.textInput}
              placeholder="Category Name"
              value={categoryName}
              placeholderTextColor={'grey'}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
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
          <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 20}}>
            <View style={styles.btnStyle}>
              <Button
                title="Add"
                onPress={() => {
                  insertCategory({
                    id: categoryValues.length.toString(),
                    name: categoryName,
                    type:
                      checked === 'income'
                        ? CategoryType.income
                        : CategoryType.expense,
                  });
                  updateData()
                  fabInvisible()
                }}
              />
            </View>
            <View style={styles.btnStyle}>
              <Button title="Cancel" onPress={fabInvisible} />
            </View>
          </View>
        </View>
      </LinearGradient>
    </Modal>
  );
};

export default AddCategory;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
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
  btnStyle: {
    width: '35%',
    margin: 5,
  },
});
