import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CategoryModel } from '../../models/CategoryModel'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CategoryItem = (item:CategoryModel) => {
  return (
    <View style={styles.categoryItem}>
      <Text style={styles.textStyle}>{item.name}</Text>
      <Icon name="delete" size={25} color="grey" />
    </View>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    categoryItem:{
        height: 70,
        alignItems: 'center',
        justifyContent:'space-between',
        backgroundColor: Colors.white,
        borderRadius: 15,
        shadowColor: Colors.shadow,
        elevation: 5,
        flexDirection: 'row',
        paddingLeft: 26,
        paddingRight: 24,
        marginTop: 6,
        marginBottom: 6,
        marginLeft: 16,
        marginRight: 6,
    },
    textStyle:{
        color:'black',
        fontSize:18
    }
})