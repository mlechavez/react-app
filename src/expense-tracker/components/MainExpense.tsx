import { Expense } from "../Expense";
import ExpenseTable from "./ExpenseTable";

const MainExpense = () => {
  const expenses: Expense[] = [
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utitilies" },
  ];
  return <ExpenseTable items={expenses} />;
};

export default MainExpense;
