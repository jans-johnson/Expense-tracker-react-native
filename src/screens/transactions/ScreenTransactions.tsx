import {StyleSheet, Text, View, ToastAndroid, FlatList} from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import React, {useState} from 'react';
import {transactionValues} from '../../db/TransactoinDb';
import TransactionItem from './TransactionItem';
import AddTransaction from './AddTransaction';


const ScreenTransactions = () => {
  const [FabVisible, setFab] = useState(false);
  const [data, setData] = useState(transactionValues);

  const setFabInvisible = () => {
    setFab(false);
  };

  const updateData = () => {
    setData(transactionValues);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
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
      <FloatingActionButton fun={() => setFab(true)} />
      {FabVisible && <AddTransaction setFabInvisible={setFabInvisible} setData={updateData} />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenTransactions;
