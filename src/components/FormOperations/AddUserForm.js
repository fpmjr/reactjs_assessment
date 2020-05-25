import React, { useState } from 'react'
import './Form.css';

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', email: '', phone: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
                if (!user.name || !user.email || !user.phone) 
                return
				props.addUser(user)
				setUser(initialFormState)
			}}
		>
            <div className="Form">
                <label>Full Name</label>
			    <input type="text" name="name" value={user.name} onChange={handleInputChange} />
			    <label>Email Address</label>
			    <input type="email" name="email" value={user.email} onChange={handleInputChange} />
                <label>Contact Number</label>
			    <input type="number" name="phone" value={user.phone} onChange={handleInputChange} />
			    <button className="AddButton">Add New Contact</button>
            </div>
            
		</form>
	)
}

export default AddUserForm
