import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Popover } from '../Popover/Popover';
import './Transaction.css';

export const Transaction = ({ transaction }) => {

    const sign = transaction.amount < 0 ? '-' : '+';
    const css = transaction.amount < 0 ? 'minus' : 'plus';

    const [popOverVisible, setPopoverVisible] = useState(false);

    const handleMouseOver = () => {
        setPopoverVisible(true)
    }

    const handleMouseLeave = () => {
        setPopoverVisible(false);
    }

    const btnClass = popOverVisible ? 'hide' : 'del-btn';

    const { deleteTransaction, isVisible } = useContext(GlobalContext);

    return (
        <li className={css}><span
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}>
            {transaction.text}</span>
            <span>

                {isVisible ? `${sign}$${Math.abs(transaction.amount)}` : '****'}
            </span>
            <button
                onClick={() => deleteTransaction(transaction.id)} className={btnClass}>
                <FontAwesomeIcon icon={faTrash} />
            </button >{popOverVisible && <Popover transaction={transaction} />}</li>

    )
}
