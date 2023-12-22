
import React, { useState } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionSearch from './components/TransactionSearch';
import './App.css'

const App = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2023-01-01',
      branch: 'Thane',
      type: 'full',
      amount: 1000,
      bank: 'ABC Bank',
      requestedBy: 'Sharad Varma',
      status: 'approved',
    },
    {
      id: 2,
      date: '2023-01-17',
      branch: 'Navi Mumbai',
      type: 'full',
      amount: 500,
      bank: 'HDFC Bank',
      requestedBy: 'Jane Doe',
      status: 'pending',
    },
    {
      id: 3,
      date: '2023-02-03',
      branch: 'Mumbai',
      type: 'short',
      amount: 12500,
      bank: 'XYZ Bank',
      requestedBy: 'Jane Doe',
      status: 'Rejected',
    },
    {
      id: 4,
      date: '2023-01-22',
      branch: 'Kurla',
      type: 'short',
      amount: 6000,
      bank: 'ICICI Bank',
      requestedBy: 'Jane Doe',
      status: 'pending',
    },
    {
      id: 5,
      date: '2023-01-02',
      branch: 'vile parle',
      type: 'full',
      amount: 500,
      bank: 'SBI Bank',
      requestedBy: 'Jane Doe',
      status: 'rejected',
    },
    {
      id: 6,
      date: '2023-01-05',
      branch: 'lower parel',
      type: 'short',
      amount: 500,
      bank: 'YES Bank',
      requestedBy: 'Sharad kappor',
      status: 'Approved',
    },
    {
      id: 7,
      date: '2023-02-10',
      branch: 'lower parel',
      type: 'full',
      amount: 500,
      bank: 'XYZ Bank',
      requestedBy: 'Abhinav',
      status: 'pending',
    },
    {
      id: 8,
      date: '2023-02-10',
      branch: 'lower parel',
      type: 'full',
      amount: 500,
      bank: 'XYZ Bank',
      requestedBy: 'Jane Doe',
      status: 'pending',
    },
    {
      id: 9,
      date: '2023-02-10',
      branch: 'Ville parle',
      type: 'full',
      amount: 500,
      bank: 'XYZ Bank',
      requestedBy: 'Vikas Mehara',
      status: 'pending',
    },
    {
      id: 10,
      date: '2023-02-10',
      branch: 'Andheri',
      type: 'full',
      amount: 500,
      bank: 'XYZ Bank',
      requestedBy: 'Vikas Shethi',
      status: 'pending',
    },
    // Add more sample transactions as needed
  ]);

  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleDelete = (id) => {
    // Update transactions state with the filtered transactions
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );

    // Update filteredTransactions state to reflect the changes
    setFilteredTransactions((prevFilteredTransactions) =>
      prevFilteredTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  const handleSearch = (searchParams) => {
    const filteredData = transactions.filter((transaction) => {
      return (
        (searchParams.from === '' || new Date(transaction.date) >= new Date(searchParams.from)) &&
        (searchParams.to === '' || new Date(transaction.date) <= new Date(searchParams.to)) &&
        (searchParams.branch === '' || transaction.branch.toLowerCase() === searchParams.branch.toLowerCase()) &&
        (searchParams.type === '' || transaction.type.toLowerCase() === searchParams.type.toLowerCase()) &&
        (searchParams.status === '' || transaction.status.toLowerCase() === searchParams.status.toLowerCase())
      );
    });

    setFilteredTransactions(filteredData);
  };

  return (
    <div className='container'>
      <h3>Admin Panel</h3>
      <div style={{ marginBottom: '20px',marginLeft:'12px' }}>
        <strong>Total ({filteredTransactions.length})</strong>
      </div>
      <TransactionSearch onSearch={handleSearch} />
     
      <TransactionTable transactions={filteredTransactions} onDelete={handleDelete} />
    </div>
  );
};
export default App;
