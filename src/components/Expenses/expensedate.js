
import './expensedate.css';
import React from 'react';

let ExpenseDate=(expence)=>{

let month=expence.date.toLocaleString('en-US',{month:'long'});
let year=expence.date.getFullYear();
let day=expence.date.toLocaleString('en-US',{day:'2-digit'});

return(
    <div className='expense-date'>
    <div className='expense-date__day'>{day}</div>
    <div className='expense-date__month'>{month}</div>   
    <div className='expense-date__year'>{year}</div>
</div>

);

}

export default ExpenseDate;