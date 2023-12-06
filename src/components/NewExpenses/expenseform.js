import React, {useState} from "react";
import './expenseform.css';

const Expenseform = (props) =>{
 
    let [enteredTitle,changeTitle]=useState();
    let [enteredAmount,changeAmount]=useState();
    let [enteredDate,changeDate]=useState();


    const titleChangeHandler = (event) =>{
       changeTitle(event.target.value);
    }
    const amountChangeHandler = (event) =>{
        changeAmount(event.target.value)
    }
    const dateChangeHandler = (event) =>{
        changeDate(event.target.value)
    }

    const SubmitHandler = (event) =>{
          event.preventDefault();
          const expenseData={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
          }
        props.recieveData(expenseData);
       changeTitle("");
       changeAmount("");
       changeDate("")
          
    }
    return(
       <form onSubmit={SubmitHandler}>
          <dov className="new-expense__controls">
            <div className="new-expense__control">
                  <label>Title</label>
                  <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                  <label>Amount</label>
                  <input value={enteredAmount} type="numbers" min='0.01' step='0.01' onChange={amountChangeHandler}></input>
            </div>
            <div className="new-expense__control">
                  <label>Date</label>
                  <input value={enteredDate} type="date" onChange={dateChangeHandler}></input>
            </div>
          </dov>
        <div className="new-expense__action">
            <button type="submit">submit</button>
        </div>
       </form>
    );
}

export default Expenseform;