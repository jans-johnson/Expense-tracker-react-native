import AsyncStorage from '@react-native-async-storage/async-storage';
import { CategoryModel, CategoryType } from "../models/CategoryModel";

export let categoryValues: CategoryModel[] = [];

export const insertCategory=(prop:CategoryModel)=>{
  if(Array.isArray(categoryValues))
    categoryValues.push(prop)
  else
    categoryValues=[{
      id:prop.id,
      name:prop.name,
      type:prop.type
    }]
  storeCategoryData(categoryValues)
}

export const removeCategory=(prop:CategoryModel)=>{
  categoryValues=categoryValues.filter((value)=>value.id!!==prop.id)
  storeCategoryData(categoryValues)
}

export const getCategoryData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('category');
    categoryValues= jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const storeCategoryData = async (value:CategoryModel[]) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('category', jsonValue);
  } catch (e) {
    // saving error
  }
};