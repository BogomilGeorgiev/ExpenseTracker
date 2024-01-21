import React from "react";
import { createContext, useReducer } from "react";
import Reducer from "./Reducer";


function getTransactions() {

    const existingTransactionsJSON = localStorage.getItem('transactions');

    const existingTransactions = existingTransactionsJSON
        ? JSON.parse(existingTransactionsJSON)
        : [];


    return existingTransactions
}

const initialState = {

    transactions: getTransactions(),
    isVisible: true

}

export const GlobalContext = createContext(initialState)


export const GlobalProvider = ({ children }) => {

    const [{ transactions, isVisible }, dispatch] = useReducer(Reducer, initialState);

    function handleVisibility() {
        dispatch({ type: 'SET_VISIBILITY' });
    }


    function deleteTransaction(id) {

        const existingTransactions = getTransactions()

        const updatedTransactions = existingTransactions.filter((tr) => tr.id !== id);

        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));

        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });

    }

    function addTransaction(transaction) {

        let existingTransactions = getTransactions();

        existingTransactions = [...existingTransactions, transaction];

        localStorage.setItem('transactions', JSON.stringify(existingTransactions))

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })

    }


    return (
        <GlobalContext.Provider value={{
            transactions,
            deleteTransaction,
            addTransaction,
            isVisible,
            handleVisibility



        }}>
            {children}
        </GlobalContext.Provider>
    )
}
