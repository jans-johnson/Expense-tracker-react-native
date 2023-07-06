import {StyleSheet, Text, View, ToastAndroid, FlatList} from 'react-native';
import React from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import {CategoryModel, CategoryType} from '../../models/CategoryModel';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Card} from 'react-native-paper';
import CategoryItem from './CategoryItem';

const addCategory = () => {
  ToastAndroid.show('From Category', ToastAndroid.SHORT);
};

const categoryValues: CategoryModel[] = [
  {
    id: '1',
    name: 'salary',
    type: CategoryType.income,
  },
  {
    id: '2',
    name: 'food',
    type: CategoryType.expense,
  },
  {
    id: '3',
    name: 'random',
    type: CategoryType.income,
  },
];

const FirstRoute = () => (
  <View>
    <FlatList
      data={categoryValues}
      renderItem={({item}) =>
        item.type === CategoryType.income ? (
          <CategoryItem name={item.name} id={item.id} type={item.type} />
        ) : (
          <></>
        )
      }
      keyExtractor={item => item.id}
    />
  </View>
);

const SecondRoute = () => (
  <View>
    <FlatList
      data={categoryValues}
      renderItem={({item}) =>
        item.type !== CategoryType.income ? (
          <CategoryItem name={item.name} id={item.id} type={item.type} />
        ) : (
          <></>
        )
      }
      keyExtractor={item => item.id}
    />
  </View>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const ScreenCategory = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Income'},
    {key: 'second', title: 'Expenses'},
  ]);

  return (
    <View style={{flex: 1}}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar {...props} style={{backgroundColor: 'grey'}} />
        )}
      />
      <FloatingActionButton fun={addCategory} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenCategory;
