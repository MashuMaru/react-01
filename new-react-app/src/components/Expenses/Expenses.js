import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');
  const handleFilter = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card propsClass="expenses">
      <ExpensesFilter onFilter={handleFilter} selected={filteredYear} />
      {props.items.map(expense => {
          if (expense.date.getFullYear().toString() === filteredYear) {
            return (
              <ExpenseItem
                key={expense.id}
                id={expense.id}
                amount={expense.amount}
                title={expense.title}
                date={expense.date}
              />
            )
          } else {
            return void 0;
          }
      })}
    </Card>
  );
}

export default Expenses;