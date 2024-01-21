import React from 'react'
import './Popover.css'

export const Popover = ({ transaction }) => {
    return (
        <div className='popover'>
            {transaction.date}
        </div>
    )
}
