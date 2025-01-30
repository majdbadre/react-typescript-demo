// src/components/ExpenseFilter.tsx
import React from "react";

type ExpenseFilterProps = {
  selectedYear: string;
  onChangeYear: (year: string) => void;
};

const ExpenseFilter: React.FC<ExpenseFilterProps> = ({
  selectedYear,
  onChangeYear,
}) => {
  return (
    <div>
      <label>Filter by Year</label>
      <select
        value={selectedYear}
        onChange={(e) => onChangeYear(e.target.value)}
      >
        <option value="2025">2025</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
