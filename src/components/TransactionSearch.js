// TransactionSearch.js
import React, { useState } from 'react';
import './TransactionSearch.css';

const TransactionSearch = ({ onSearch }) => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    branch: '',
    type: '',
    status: '',
  });

  const handleChange = (e) => {
    setSearchParams({ ...searchParams, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
 
    <div className="transaction-search">
   
      <div className="input-group">
        <label htmlFor="from">From</label>
        <input
        style={{fontSize:'12px'}}
          type="date"
          id="from"
          name="from"
          value={searchParams.from}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="to">To</label>
        <input
        style={{fontSize:'12px'}}
          type="date"
          id="to"
          name="to"
          value={searchParams.to}
          onChange={handleChange}
        />
      </div>

      <div className="input-group">
        <label htmlFor="branch">Branch</label>
        <select
        style={{fontSize:'12px', marginTop:'5px'}}
          id="branch"
          name="branch"
          value={searchParams.branch}
          onChange={handleChange}
        >
          <option value="">All</option>
          <option value="Thane">Thane</option>
          <option value="Navi mumbai">Navi Mumbai</option>
          <option value=" Mumbai"> Mumbai</option>
          <option value="Kurla">Kurla</option>
          <option value="Vile parle">Vile parle</option>
          <option value="Lower parel">Lower parel</option>
          <option value="Andheri">Andheri</option>
          <option value="byculla">Byculla</option>

          {/* Add other branch options */}
        </select>
      </div>

      <div className="input-group">
        <label>Type</label>
        <select style={{fontSize:'12px'}} name="type" value={searchParams.type} onChange={handleChange}>
          <option value="">All</option>
          <option value="full">Full</option>
          <option value="short">Short</option>
        </select>
      </div>

      <div className="input-group">
        <label>Status</label>
        <select style={{fontSize:'12px'}}name="status" value={searchParams.status} onChange={handleChange}>
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <button className='search-button'onClick={handleSearch}>Search ID</button>
    </div>
  );
};

export default TransactionSearch;
