import React from 'react'
import TableRow from '../TableRow'

const CustomTable = ({data}) => {
  return (
    <table className="data-table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Body</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item, index) => (
        <TableRow item={item} key={index}/>
      ))}
    </tbody>
  </table>
  )
}

export default CustomTable