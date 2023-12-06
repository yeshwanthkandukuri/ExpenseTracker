import './ExpenseItem.css';
import Card from '../UI/card'
import ExpenseDate from './expensedate';

const ExpenseItem = (props) => {
    
    return (
        <Card className="expense-item">
            <ExpenseDate date={new Date(props.date)} />
            <div className="expense-item__description">
                <h2>{ props.title }</h2>
                <div className="expense-item__price">{ props.amount }</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;