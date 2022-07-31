import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import INIT_EXPENSES from './Variables/INIT_EXPENSES'

const App = () => {
  const [expenses, setExpenses] = useState(INIT_EXPENSES);
  const addExpenseHandler = (newExpense) => {
    setExpenses(prevState => {
      return [
        newExpense,
        ...prevState
      ]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
