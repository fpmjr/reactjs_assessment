import React, { useState, useEffect } from 'react'
import './Form.css';

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )
  
  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }}
    >
     <div className="Form">
        <label>Full Name</label>
	      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
	      <label>Email Address</label>
	      <input type="email" name="email" value={user.email} onChange={handleInputChange} />
        <label>Contact Number</label>
	      <input type="number" name="phone" value={user.phone} onChange={handleInputChange} />
        <button  className="AddButton">Update user</button>
        <button className="CancelButton" onClick={() => props.setEditing(false)}>
          Cancel
        </button>
     </div>
     
    </form>
  )
}

export default EditUserForm
