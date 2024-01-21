import React from 'react';
import { GlobalContext } from '../context/GlobalState';
import { useContext } from 'react';
import { Transaction } from './Transaction';
import './TransactionsList.css'

export const TransactionsList = () => {

    const { transactions } = useContext(GlobalContext);

    return (
        <div className="transactions-list">
            <h3>Transaction History</h3>
            <ul className="list">
                {transactions.length < 1 ? 'Empty...' :
                    transactions.map(tr => <Transaction key={tr.id} transaction={tr} />)
                }
            </ul>
        </div>
    )
}
