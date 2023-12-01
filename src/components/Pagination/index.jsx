import React, { useContext } from 'react'
import { dataContext } from '../../context/DataContexts'

const Pagination = () => {
    const {pageNumbers,currentPage, handlePageChange} = useContext(dataContext)
  return (
    <div className="pagination-container" style={{ overflowX: "scroll" }}>
    <ul className="pagination-list">
      {pageNumbers.map((number) => (
        // console.log("here>>",number)
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <span onClick={() => handlePageChange(number)}>{number}</span>
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Pagination