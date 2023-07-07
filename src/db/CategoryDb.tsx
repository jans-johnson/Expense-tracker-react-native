import { CategoryModel, CategoryType } from "../models/CategoryModel";

export const categoryValues: CategoryModel[] = [
    {
      id: '0',
      name: 'salary',
      type: CategoryType.income,
    },
    {
      id: '1',
      name: 'food',
      type: CategoryType.expense,
    },
    {
      id: '2',
      name: 'random',
      type: CategoryType.income,
    },
  ];

export const insertCategory=(prop:CategoryModel)=>{
  categoryValues.push(prop)
}