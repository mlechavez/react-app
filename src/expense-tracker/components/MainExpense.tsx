import { useState } from "react";
import { Expense } from "../Expense";
import ExpenseTable from "./ExpenseTable";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseForm from "./ExpenseForm";

const MainExpense = () => {
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, description: "Milk", amount: 5, category: "Groceries" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 4, description: "Movies", amount: 15, category: "Entertainment" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    setExpenses(filteredExpenses.filter((e) => e.id !== id));
  };

  let filteredExpenses: Expense[] = !selectedCategory
    ? expenses
    : expenses.filter((e) => e.category.toLowerCase() === selectedCategory);

  return (
    <>
      <div className="mb-5">
        <ExpenseForm />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelect={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseTable items={filteredExpenses} onDelete={handleDelete} />
    </>
  );
};

export default MainExpense;
