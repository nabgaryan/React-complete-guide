import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpensesList';


function Expenses(props) {
  const [enteredYear, setEnteredYear] = useState('2020');


  const onSelectHandler = (selectedYear) => {
    setEnteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === enteredYear);
  console.log(filteredExpenses);

   return (
    <li>
    <Card className="expenses">
      <ExpensesFilter selected={enteredYear} onselectYear={onSelectHandler} />
      <ExpensesList items={filteredExpenses}/>
    </Card>
    </li>
  );

}

export default Expenses;