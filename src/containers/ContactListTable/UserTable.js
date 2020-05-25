import React from 'react'
import './UserTable.css'


const UserTable = props => (

  

  <table className="Table">
    <thead>
      <tr>
        <th>ID No.</th>  
        <th>Name</th>
        <th>Email Address</th>
        <th>Contact Number</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>  
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>
              <button className="View" 
                onClick={() => { props.viewRow(user) } } >
                View
              </button>            
              <button className="Edit"
                onClick={() => { props.editRow(user) } }>
                Edit
              </button>
            
              <button className="Delete"
                onClick={() => props.deleteUser(user.name)}>
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={5}>No users</td>
        </tr>
      )}
    </tbody>
  </table>

    
)

export default UserTable
