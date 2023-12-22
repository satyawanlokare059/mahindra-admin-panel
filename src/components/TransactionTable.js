// TransactionTable.js
import React from 'react';
import TransactionTableRow from './TransactionTableRow';
import './TransactionTable.css';    

const TransactionTable = ({ transactions, onDelete }) => {
  return (
    <table className="transaction-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
          <th>BRANCH</th>
          <th>TYPE</th>
          <th className='headertop'>AMOUNT
          <p>(IN RUPEES)</p>
          </th>
          <th>BANK</th>
          <th>REQUESTED BY
          <p>(EMPLOYEE CODE)</p></th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <TransactionTableRow
            key={transaction.id}
            transaction={transaction}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;
