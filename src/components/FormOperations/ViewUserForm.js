import React, { useState, useEffect } from 'react'
import './Form.css';

const ViewUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  return (
        <form
        onSubmit={event => {
            event.preventDefault()

            props.viewUser(user.id, user)
        }}
        >
        <div className="Form">
            <p>ID: {user.id}</p>
            <p>Full Name: {user.name}</p>
            <p>Email Address: {user.email}</p>
            <p>Contact Number: {user.phone}</p>
            <button className="CancelButton" onClick={() => props.setViewing(false)}>
            Back
            </button>    
        </div>
        </form>
        
  )
}

export default ViewUserForm
