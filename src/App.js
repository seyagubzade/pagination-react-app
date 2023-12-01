import React, { useContext } from 'react';
import './App.css'; 
import { dataContext } from './context/DataContexts';
import CustomTable from './components/CustomTable';
import Pagination from './components/Pagination';

const App = () => {
  const {
    searchText,
    itemsPerPage,
    handleSearch,
    handleItemsPerPageChange,
    indexOfLastItem,
    indexOfFirstItem,
    currentItems,
  } = useContext(dataContext)
  
  console.log(indexOfFirstItem, indexOfLastItem, currentItems)

  return (
    <div className="app-container">
      <input
        type="text"
        placeholder="Search by name"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        className="search-input"
      />

      <select value={itemsPerPage} onChange={handleItemsPerPageChange} className="select-dropdown">
        <option value={8}>8 per page</option>
        <option value={10}>10 per page</option>
        <option value={12}>12 per page</option>
      </select>

      <CustomTable data={currentItems} />

      <Pagination/>
    </div>
  );
};

export default App;
