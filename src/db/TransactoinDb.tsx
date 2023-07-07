import { CategoryType } from "../models/CategoryModel";
import { Transaction } from "../models/TransactionModel";
import { categoryValues } from "./CategoryDb";

export const transactionValues: Transaction[] = [
    {
      id: '0',
      purpose: 'salary- june',
      amount:5000,
      date:new Date("2019-01-16"),
      type: CategoryType.income,
      category:categoryValues[0]
    },
    {
        id: '1',
        purpose: 'oonu',
        amount:50,
        date:new Date("2019-02-16"),
        type: CategoryType.expense,
        category:categoryValues[1]
    },
    {
        id: '2',
        purpose: 'vazhiside',
        amount:5000,
        date:new Date("2023-01-16"),
        type: CategoryType.income,
        category:categoryValues[2]
    },
  ];