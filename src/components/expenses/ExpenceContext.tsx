import { createContext, useContext, useState } from "react";
import { Expense } from "./Expense";

type ExpenseProps = {
  children: React.ReactNode;
};

type ExpenceType = {
  expences: Expense[];
  addExpence: (expence: Expense) => void;
};

export const ExpenceContext = createContext<ExpenceType | null>(null);

export const ExpenceProvider = ({ children }: ExpenseProps) => {
  const [expences, setExpences] = useState<Expense[]>([]);

  const addExpence = (expence: Expense) => {
    setExpences([...expences, expence]);
  };
  return (
    <ExpenceContext.Provider value={{ expences, addExpence }}>
      {children}
    </ExpenceContext.Provider>
  );
};

export const useExpence = () => {
  const context = useContext(ExpenceContext);
  if (!context) {
    throw new Error("useExpense must be used within an ExpenseProvider");
  }
  return context;
};
