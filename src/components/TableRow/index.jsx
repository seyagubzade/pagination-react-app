import React from 'react'

const TableRow = ({item}) => {
  return (
    <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.body}</td>
    </tr>
  )
}

export default TableRow