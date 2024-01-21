import React, { useContext, useEffect, useRef, useState } from 'react'
// import DatePicker from "react-datepicker";
import { GlobalContext } from '../context/GlobalState';
import './AddTransaction.css'
// import "react-datepicker/dist/react-datepicker.css";


export const AddTransactionForm = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();

    }, [])

    const { addTransaction } = useContext(GlobalContext);

    const submitHandler = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 10000),
            text,
            amount: +amount,
            date
        }

        if (newTransaction.text === '' || newTransaction.amount === 0
            || newTransaction.date === '') {
            return alert('All fields must be filled!')
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
        setDate('');

    }



    return (
        <div className='trans-form-container'>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Date</label>
                    <input ref={inputRef} type='text' value={date}
                        onChange={(e) => setDate(e.target.value)} placeholder='dd.mm.yy'></input>
                    {/* <DatePicker selected={date} dateFormat="dd/MM/yyyy" onChange={(date) => setDate(date)} /> */}
                </div>
                <div>
                    <label>Text</label>
                    <input type='text' value={text}
                        onChange={(e) => setText(e.target.value)} placeholder='Enter text...'></input>
                </div>
                <div>
                    <label>Amount</label>
                    <input type='number' value={amount}
                        onChange={(e) => setAmount(e.target.value)} placeholder='Enter amount...'></input>
                </div>
                <button className='btn'>Add Transaction</button>
            </form>
        </div>
    )
}
