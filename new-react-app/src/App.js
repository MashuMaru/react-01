import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const INIT_EXPENSES = [
  {
    id: 1,
    amount: 32.50,
    title: 'Car Insurance',
    date: new Date(2022, 7, 27)
  },
  {
    id: 2,
    amount: 300,
    title: 'Boots',
    date: new Date(2022, 7, 27)
  },
  {
    id: 3,
    amount: 50,
    title: 'Gym',
    date: new Date(2021, 7, 27)
  },
  {
    id: 4,
    amount: 300,
    title: 'Boots',
    date: new Date(2021, 7, 27)
  },
  {
    id: 5,
    amount: 12,
    title: 'Mobile',
    date: new Date(2019, 7, 27)
  }
]
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
