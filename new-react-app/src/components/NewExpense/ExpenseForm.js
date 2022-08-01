import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: e.target.value,
      };
    });
  };
  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: e.target.value,
      };
    });
  };
  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: e.target.value,
      };
    });
  };
  const submitNewExpense = (e) => {
    e.preventDefault();
    for (const props in userInput) {
      if (userInput[props] === '') {
        return
      }
    }
    const newExpense = {
      title: userInput.title,
      amount: +userInput.amount.toFixed(2),
      date: new Date(userInput.date)
    }
    props.onSaveExpenseData(newExpense);
    setUserInput({
      title: '',
      amount: '',
      date: '',
    })
  }
  const resetEditingHandler = () => {
    props.resetEditing()
  }
  return (
    <form onSubmit={submitNewExpense}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={userInput.title}
            type="text"/>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={userInput.amount}
            type="number"
            min="0.01"
            step="0.01"/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={userInput.date}
            type="date"
            min="2019-01-01"
            max="2022-12-31"/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={resetEditingHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
