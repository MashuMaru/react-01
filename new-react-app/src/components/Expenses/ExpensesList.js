import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

function ExpensesList (props) {
  let expensesContent = <p>No expenses found.</p>;
  if (props.items.length) {
    expensesContent = props.items.map(expense => {
      return (
        <ExpenseItem
          key={expense.id}
          amount={expense.amount.toFixed(2)}
          title={expense.title}
          date={expense.date}
        />
      )
    })
  }
  return expensesContent
}

export default ExpensesList;