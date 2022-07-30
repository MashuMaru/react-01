import './NewExpense.css'
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  // const onSaveExpenseDataHandler = (newExpenseData) => {
  //   const expenseData = {
  //     ...newExpenseData,
  //     id: Math.random().toString() * 10
  //   }
  //   props.onAddExpense(expenseData)
  // }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={props.onAddExpense} />
    </div>
  )
}

export default NewExpense;