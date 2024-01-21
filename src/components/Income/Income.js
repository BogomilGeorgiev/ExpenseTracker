import React, { useContext } from 'react'
import './Income.css'
import { GlobalContext } from '../context/GlobalState';

export const Income = () => {

    const { transactions, isVisible } = useContext(GlobalContext);

    const amounts = transactions.map(tr => tr.amount);

    const income = amounts
        .filter(amount => amount > 0)
        .reduce((acc, amount) => (acc += amount), 0)
        .toFixed(2);


    return (
        <div className='income'>
            <h4>Income</h4>
            <p className='plus-funds'>+${isVisible ? income : '***'}</p>
        </div>
    )
}
