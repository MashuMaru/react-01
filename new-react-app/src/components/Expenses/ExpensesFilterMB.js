import React from 'react';

import './ExpensesFilter.css';

const options = [
  {
    value: 2022,
  },
  {
    value: 2021,
  },
  {
    value: 2020,
  },
  {
    value: 2019,
  },
]
const ExpensesFilter = (props) => {
  const handleSelection = (e) => {
    props.onFilter(e.target.value)
  }
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={handleSelection}>
          {options.map(option => {
            return (
              <option
                key={option.value}
                value={option.value}>
                {option.label}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;