import Allexpenses from './components/Expenses/expenses';
import React, { useState } from 'react';
import NewExpense from './components/NewExpenses/newExpense';
let dummydata = [
    {
        id:'e1',title:'school fee',amount:250,date: new Date(2023,12,2)
    },
    {
        id:'e2',title:'books',amount:800,date: new Date(2023,12,5)
    },
    {
        id:'e3',title:'rent',amount:1220,date: new Date(2023,12,10)
    },
    {
        id:'e4',title:'food',amount:250,date: new Date(2023,12,17)
    }
]
let App = () =>{


   let [expenses,setExpenses]=useState(dummydata);
    
    const appdata=(data)=>{
        const updatedExpense = [data,...expenses]
       setExpenses(updatedExpense)
    }
    return (
            
            <div>
                <NewExpense data={appdata}/>
                <Allexpenses item={expenses}/>
                </div>
               
        
    );
}
export default App;