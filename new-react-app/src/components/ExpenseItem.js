const date = new Date()
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();

const array = [
  {
    first: "Matt",
    second: "Berenyi",
    age: "31"
  },
  {
    first: "Emma",
    second: "Foulds",
    age: "32"
  },
  {
    first: "Paul",
    second: "Foulds",
    age: "37"
  },
]

function ExpenseItem() {
    return (
        <div>
          <h1>Todays date is: <span>{day + '-' + month + '-' + year}</span></h1>
          {array.map(object => {
            return <div>
              <p>Firstname: {object.first}</p>
              <p>Surname:{object.second}</p>
              <p>Age: {object.age}</p>
            </div>
          })}
        </div>
    )
}

export default ExpenseItem;