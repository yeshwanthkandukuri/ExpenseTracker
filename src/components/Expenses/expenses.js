
import './expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/card';
import React from 'react';


let Allexpenses=(props)=>{

    return(
        <Card className='Allexpenses'>
        {
           props.item.map(
            expense =>
            (
            <ExpenseItem 
            date={expense.date}
             amount={expense.amount}
              title={expense.title}/>
            )
           )
        }

        </Card>
    );
          
    


}

export default Allexpenses;