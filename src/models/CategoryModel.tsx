export enum CategoryType {
    income = 'income',
    expense = 'expense',
  }

export type CategoryModel={
    id: string,
    name: string,
    type: CategoryType
}