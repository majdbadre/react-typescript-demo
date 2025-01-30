// src/components/ExpenseForm.tsx
import React, { useState } from "react";
import { Expense } from "./Expense";
type ExpenseFormProps = {
  onSubmit: (expense: Expense) => void;
};

const ExpenseForm: React.FC<ExpenseFormProps> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newExpense: Expense = {
      id: Math.random(),
      title,
      amount: +amount,
      date: new Date(date),
    };
    console.log("sdfjlasdkjf")

    onSubmit(newExpense);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
