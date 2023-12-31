import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../constants/colors';
import {useNavigation, useRoute} from '@react-navigation/native';
import {Transaction} from '../models/TransactionModel';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker';
import {RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import {categoryValues} from '../db/CategoryDb';
import {insertTransaction} from '../db/TransactoinDb';
import {CategoryType} from '../models/CategoryModel';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const EditTransactionsScreen = () => {
  const route = useRoute();
  const params = route.params as Transaction;
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [checked, setChecked] = React.useState('income');
  const [purpose, setPurpose] = React.useState('');
  const [amount, setAmount] = React.useState('');
  const [calendarVisible, showCalendar] = React.useState(false);
  const [selectedDate, changeDate] = React.useState(new Date());
  const [isOpenDropdown, setOpenDropdown] = React.useState(false);
  const [dropdownValue, setDropdownValue] = React.useState(null);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
      <Text style={styles.title}>Edit Transaction</Text>
      <TextInput
        editable
        onChangeText={(text: string) => setPurpose(text)}
        style={styles.textInput}
        placeholder="Purpose"
        value={purpose}
        placeholderTextColor={'grey'}
      />
      <TextInput
        editable
        onChangeText={(text: string) => setAmount(text)}
        style={styles.textInput}
        placeholder="Amount"
        value={amount}
        keyboardType="numeric"
        placeholderTextColor={'grey'}
      />
      <Pressable
        style={{justifyContent: 'center'}}
        onPress={() => showCalendar(true)}>
        <View style={{flexDirection: 'row', marginTop: 20, marginBottom: 20}}>
          <Icon
            name="calendar"
            size={25}
            color={'grey'}
            style={{marginRight: 10}}
          />
          <Text style={styles.textStyle}>{selectedDate.toDateString()}</Text>
        </View>
      </Pressable>
      <DatePicker
        modal
        mode="date"
        open={calendarVisible}
        date={selectedDate}
        onConfirm={date => {
          showCalendar(false);
          changeDate(date);
        }}
        onCancel={() => {
          showCalendar(false);
        }}
      />
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
      <DropDownPicker
        style={{marginTop: 25}}
        open={isOpenDropdown}
        value={dropdownValue}
        items={categoryValues
          .filter(item => item.type === checked)
          .map(item => {
            return {label: item.name, value: item.id};
          })}
        setOpen={setOpenDropdown}
        setValue={setDropdownValue}
      />
      <View style={{flexDirection: 'row', marginBottom: 20, marginTop: 20}}>
        <View style={styles.btnStyle}>
          <Button
            title="Add"
            onPress={() => {
              insertTransaction({
                id: Date.now().toString(),
                amount: parseInt(amount),
                category: categoryValues.filter(
                  item => item.id == dropdownValue,
                )[0],
                date: selectedDate,
                purpose: purpose,
                type:
                  checked == CategoryType.income
                    ? CategoryType.income
                    : CategoryType.expense,
              });
            }}
          />
        </View>
        <View style={styles.btnStyle}>
          <Button title="Cancel" onPress={() => {
            navigation.pop()
          }} />
        </View>
      </View>
    </View>
  );
};

export default EditTransactionsScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 15,
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    color: Colors.primary500,
    fontSize: 25,
    borderWidth: 2,
    padding: 10,
    borderColor: Colors.primary200,
    fontWeight: 'bold',
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
