import './NewExpense.css'
import ExpenseForm from './ExpenseForm';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const isEditingHandler = () => {
    setIsEditing(prevState => {
      return (prevState = !prevState)
    });
  }
  const onSaveExpenseDataHandler = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random().toString() * 10
    }
    props.onAddExpense(expenseData)
    isEditingHandler()
  }
  return (
    <div className="new-expense">
      {isEditing ? 
        <ExpenseForm 
          onSaveExpenseData={onSaveExpenseDataHandler}
          resetEditing={isEditingHandler} /> :
        <button onClick={isEditingHandler}>Add New Expense</button>
      }
    </div>
  )
}

export default NewExpense;