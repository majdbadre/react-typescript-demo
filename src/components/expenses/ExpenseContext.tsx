import React, { createContext, useContext, useState, ReactNode } from "react";
import { Expense } from "./Expense";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
};

const ExpenseContext = createContext<ExpenseContextType | undefined>(undefined);

export const ExpenseProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export const useExpense = () => {
  const context = useContext(ExpenseContext);
  if (!context) {
    throw new Error("useExpense must be used within an ExpenseProvider");
  }
  return context;
};
