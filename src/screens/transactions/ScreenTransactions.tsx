import {StyleSheet, Text, View, ToastAndroid, FlatList} from 'react-native';
import FloatingActionButton from '../../components/FloatingActionButton';
import React, {useState,useEffect} from 'react';
import {getTransactionData, transactionValues} from '../../db/TransactoinDb';
import TransactionItem from './TransactionItem';
import AddTransaction from './AddTransaction';


const ScreenTransactions = () => {
  
  getTransactionData()

  const [FabVisible, setFab] = useState(false);
  const [transactionData, setTransactionData] = useState(transactionValues);
  const setFabInvisible = () => {
    setFab(false);
  };

   const updateTransactionData = () => {
    setTransactionData(transactionValues);
  };
  
  useEffect(() => {
    const fetchData = async () => {
      await getTransactionData();
      setTransactionData(transactionValues);
    };

    fetchData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          data={transactionData}
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
      {FabVisible && <AddTransaction setFabInvisible={setFabInvisible} setData={updateTransactionData} />}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenTransactions;
