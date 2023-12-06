import React from "react";
import Expenseform from './expenseform';
import './newExpense.css';



const NewExpense = (props) =>{
    const recieveExpencedata=(x)=>{
        console.log(x);
        const data={...x};
        props.data(x);
    }
    
     return(
        <div className="new-expense">
            <Expenseform recieveData={recieveExpencedata}/>
        </div>
     );
}

export default NewExpense;