import './ExpensesList.css'
import ExpenseItem from './ExpenseItem';

const ExpensesList = (props) => {
  if (!props.items.length) {
    return (
      <h2 className='expenses-list__fallback'>Found no expenses.</h2>
    )
  }
  return (
    <ul className='expenses-list'>
      {props.items.map(expense => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            title={expense.title}
            date={expense.date}
          />
        )
      })}
    </ul>
  )
}

export default ExpensesList;