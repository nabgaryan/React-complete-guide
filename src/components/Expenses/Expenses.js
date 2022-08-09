import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';


function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');


  const onSelectHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === enteredYear);
console.log(filteredExpenses);
  return (
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onselectYear={onSelectHandler} />
      {filteredExpenses.map(expense => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );

}

export default Expenses;