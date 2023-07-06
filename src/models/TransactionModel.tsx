import { CategoryModel, CategoryType } from "./CategoryModel"

export type Transaction ={
    id: string
    purpose: string,
    amount: number,
    date: Date
    type: CategoryType
    category: CategoryModel
}