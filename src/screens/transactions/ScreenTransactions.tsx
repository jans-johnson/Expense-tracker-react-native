import {StyleSheet, Text, View, ToastAndroid, FlatList} from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import React from 'react';
import {transactionValues} from '../../db/TransactoinDb';
import TransactionItem from './TransactionItem';

const addTransactions = () => {
  ToastAndroid.show('From Transactions', ToastAndroid.SHORT);
};

const ScreenTransactions = () => {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={transactionValues}
          renderItem={({item}) => (
            <TransactionItem
              id={item.id}
              amount={item.amount}
              category={item.category}
              date={item.date}
              purpose={item.purpose}
              type={item.type}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
      <FloatingActionButton fun={addTransactions} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenTransactions;
