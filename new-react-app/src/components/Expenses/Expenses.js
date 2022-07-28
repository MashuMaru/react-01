import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

function Expenses (props) {
  return (
    <Card propsClass="expenses">
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
    </Card>
  );
}

export default Expenses;