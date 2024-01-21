import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import './Balance.css'


export const Balance = () => {

    const { transactions, isVisible, handleVisibility } = useContext(GlobalContext);

    const balance = transactions
        .map(tr => tr.amount)
        .reduce((acc, tr) => (acc += tr), 0)
        .toFixed(2);

    return (
        <>
            <h4>Total Balance</h4>
            <h1>${isVisible ? balance : '*****'}</h1>
            <button className='eye' onClick={handleVisibility}>👁️</button>

        </>
    )
}
