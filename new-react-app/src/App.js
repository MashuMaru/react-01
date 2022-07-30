import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const expenses = [
    {
      id: 1,
      amount: 32.50,
      title: 'Car Insurance',
      date: new Date(2022, 7, 27)
    },
    {
      id: 2,
      amount: 50,
      title: 'Gym',
      date: new Date(2022, 7, 27)
    },
    {
      id: 3,
      amount: 12,
      title: 'Mobile',
      date: new Date(2022, 7, 27)
    }
  ]
  const [localExpenses, setExpenses] = useState(expenses);
  const addExpenseHandler = (newExpense) => {
    const newId = Math.max(...expenses.map(x => x.id)) + 1
    const newExpenseItem = {
      id: newId,
      title: newExpense.title,
      amount: newExpense.amount,
      date: new Date(newExpense.date)
    }
    setExpenses(prevState => {
      return [
        ...prevState,
        newExpenseItem
      ]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={localExpenses} />
    </div>
  );
}

export default App;
