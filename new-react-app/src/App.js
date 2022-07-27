import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>Let's get started! Great...</h2>
      {expenses.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date} 
          />)
      })}
    </div>
  );
}

export default App;
