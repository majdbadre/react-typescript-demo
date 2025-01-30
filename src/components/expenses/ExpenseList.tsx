// src/components/ExpenseList.tsx
import React from "react";
import { Expense } from "./Expense";

type ExpenseListProps = {
  expenses: Expense[];
};

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses }) => {
  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <h3>{expense.title}</h3>
          <p>Amount: ${expense.amount}</p>
          <p>Date: {expense.date.toLocaleDateString()}</p>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
