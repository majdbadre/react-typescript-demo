import { useState } from "react";
import { useExpense } from "./components/expenses/ExpenseContext";
import ExpenseList from "./components/expenses/ExpenseList";
import ExpenceForm from "./components/expenses/ExpenseForm";
import FilterExpenses from "./components/expenses/FilterExpenses";

const App = () => {
  const { expenses, addExpense } = useExpense();

  const [selectedYear, setSelectedYear] = useState("2025");

  const FilteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div>
      <ExpenceForm onSubmit={addExpense} />
      <FilterExpenses
        selectedYear={selectedYear}
        onChangeYear={setSelectedYear}
      />
      <ExpenseList expenses={FilteredExpenses} />
    </div>
  );
};

export default App;
