import {StyleSheet, View, FlatList} from 'react-native';
import React, { useState } from 'react';
import FloatingActionButton from '../../components/FloatingActionButton';
import {CategoryType} from '../../models/CategoryModel';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import CategoryItem from './CategoryItem';
import AddCategory from './AddCategory';
import { categoryValues } from '../../db/CategoryDb';


const ScreenCategory = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Income'},
    {key: 'second', title: 'Expenses'},
  ]);
  const [FabVisible,setFab] = useState(false)

  const [data,setData] = useState(categoryValues)

  const setFabInvisible=()=>{
    setFab(false)
  }

  const updateData=()=>{
    setData(categoryValues)
  }

  const FirstRoute = () => (
    <View>
      <FlatList
        data={categoryValues}
        renderItem={({item}) =>
          item.type === CategoryType.income ? (
            <CategoryItem name={item.name} id={item.id} type={item.type} updateData={updateData}/>
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
            <CategoryItem name={item.name} id={item.id} type={item.type} updateData={updateData}/>
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
      <FloatingActionButton fun={()=>setFab(true)} />
      {FabVisible && <AddCategory fabInvisible={setFabInvisible} updateData={updateData}/>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ScreenCategory;
