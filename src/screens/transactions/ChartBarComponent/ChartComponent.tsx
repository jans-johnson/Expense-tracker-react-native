import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import ChartItem, {chartItem} from './ChartItem';
import {transactionValues} from '../../../db/TransactoinDb';
import {CategoryType} from '../../../models/CategoryModel';
import {Transaction} from '../../../models/TransactionModel';

  const buildChartData:()=>chartItem[]=()=>{
  let chartData: chartItem[] = [];
  const currentDate = new Date();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(currentDate.getDate() - 7);
  const updated = transactionValues.filter(
    val =>
      val.type === CategoryType.expense && new Date(val.date) > sevenDaysAgo,
  );
  while (sevenDaysAgo.getDate() !== currentDate.getDate()) {
    let sum=0;
    sum = updated.reduce((max, obj) => {
      return new Date(obj.date).getDate() === currentDate.getDate() ? max + obj.amount : max;
    },0);
    if(Array.isArray(chartData))
      chartData.push({current:sum,day:currentDate.toDateString().slice(0,3),highest:sum})
    else
      chartData=[{
        current:sum,
        day:currentDate.toDateString().slice(0,3),
        highest:sum,
      }]
    currentDate.setDate(currentDate.getDate() - 1);
  }
  const highestScore = chartData.reduce((max, obj) => {
    return obj.highest > max ? obj.highest : max;
  }, 0);
  return chartData.map(obj => {
    return { ...obj, highest: highestScore };
  });
};

const ChartComponent = () => {
  const windowHeight = Dimensions.get('window').height;
  return (
    <View style={[styles.container, {height: windowHeight * 0.155}]}>
      {buildChartData().map((val)=><ChartItem current={val.current} day={val.day} highest={val.highest} key={val.day}/>)}
    </View>
  );
};

export default ChartComponent;

const styles = StyleSheet.create({
  container: {
    elevation: 10,
    marginHorizontal: 10,
    marginVertical: 6,
    backgroundColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
