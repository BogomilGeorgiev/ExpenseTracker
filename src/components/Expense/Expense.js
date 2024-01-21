import { useContext } from 'react';
import React from 'react';
import './Expense.css';
import { GlobalContext } from '../context/GlobalState';

export const Expense = () => {

    const { transactions, isVisible } = useContext(GlobalContext);

    const amounts = transactions.map(tr => tr.amount);

    const expense = amounts
        .filter(amount => amount < 0)
        .reduce((acc, amount) => (acc += amount), 0)


    return (
        <div className='expense'>
            <h4>Expense</h4>
            <p className='minus-funds'>-${isVisible ? (Math.abs(expense).toFixed(2)) : '***'}</p>
        </div>
    )
}
