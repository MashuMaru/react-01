import { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  const filteredExpenses = props.items.filter(
    x => x.date.getFullYear().toString() === filteredYear)
  return (
    <Card propsClass="expenses">
      <ExpensesFilter onFilter={handleFilter} selected={filteredYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;