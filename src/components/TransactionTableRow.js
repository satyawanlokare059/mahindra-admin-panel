// TransactionTableRow.js
import React from 'react';
import './TransactionTable.css'; 
const TransactionTableRow = ({ transaction, onDelete }) => {
  return (
    <tr>
      <td style={{fontWeight:'bold'}}>{transaction.id}</td>
      <td>{transaction.date}</td>
      <td>{transaction.branch}</td>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.bank}</td>
      <td>{transaction.requestedBy}</td>
      <td>{transaction.status}</td>
  
      <td>
        <span
          className="close-icon"
          onClick={() => onDelete(transaction.id)}
        >
          &#10006;
        </span>
      </td>

    </tr>
  );
};

export default TransactionTableRow;
