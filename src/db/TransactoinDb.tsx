import AsyncStorage from "@react-native-async-storage/async-storage";
import { Transaction } from "../models/TransactionModel";

export let transactionValues: Transaction[] = [];

  export const insertTransaction=(prop:Transaction)=>{
    if(Array.isArray(transactionValues))
    transactionValues.push(prop)
  else
    transactionValues=[{
      id:prop.id,
      amount:prop.amount,
      category:prop.category,
      date:prop.date,
      purpose:prop.purpose,
      type:prop.type
    }]
  storeTransactionData(transactionValues)
  }

  export const removeTransaction=(prop:Transaction)=>{
    transactionValues=transactionValues.filter((value)=>value.id!!==prop.id)
    storeTransactionData(transactionValues)
  }
  
  export const getTransactionData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('transaction');
      transactionValues= jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
    }
  };
  
  const storeTransactionData = async (value:Transaction[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('transaction', jsonValue);
    } catch (e) {
      // saving error
    }
  };