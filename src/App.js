import React, { useState, Fragment, useEffect } from 'react'
import logo from './contact.png';
import './App.css';
import AddUserForm from './components/FormOperations/AddUserForm'
import EditUserForm from './components/FormOperations/EditUserForm'
import ViewUserForm from './components/FormOperations/ViewUserForm'
import UserTable from './containers/ContactListTable/UserTable'
import axios from 'axios'

		

const App = () => {
		
	// Data
	const url = 'https://jsonplaceholder.typicode.com/users'
  	const [data, setData] = useState([])

  	useEffect(() => {
  	  axios.get(url).then(json => setData(json.data))
  	}, [])
	

	const usersData = [ 		
		{ id: 1, name: 'Leanne Graham', email: 'Sincere@april.biz', phone: '1-770-736-8031 x56442' },
    	{ id: 2, name: 'Ervin Howell', email: 'Shanna@melissa.tv', phone: '010-692-6593 x09125' },
    	{ id: 3, name: 'Clementine Bauch', email: 'Nathan@yesenia.net', phone: '1-463-123-4447' }
	]

	const initialFormState = { id: null, name: '', email: '', phone: '' }
	
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)
	const [ viewing, setViewing ] = useState(false)
	
	//Add contact
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	//View contact
	const viewUser = (id, viewUser) => {
		setViewing(false)
	
			setUsers(users.map(user => (user.id === id ? viewUser : user)))
		}  
	
		 const viewRow = user => {
		   setViewing(true)
	
		   setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone })
		  }

	//Edit contact
	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
    setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, email: user.email, phone: user.phone })
  	}

	//Delete contact
	const deleteUser = (name) => {
		setEditing(false)

		setUsers(users.filter(user => user.name !== name))
	}

		

	return (

			<div>
				<div className="App">
					<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Contact List Application</h1>
					</header>
				</div>

				<div >
					<div >
						{editing ? (
							<Fragment>
								<h2 className="Contact">Edit Contact</h2>
								<EditUserForm
									editing={editing}
									setEditing={setEditing}
									currentUser={currentUser}
									updateUser={updateUser}
								/>
							</Fragment>
						) : (
							viewing ? (
								<Fragment>
									<h2 className="Contact">View Contact</h2>
									<ViewUserForm
										viewing={viewing}
										setViewing={setViewing}
										currentUser={currentUser}
										updateUser={viewUser}
									/>
								</Fragment>
							) : (
								<Fragment>
									<h2 className="Contact">Add Contact</h2>
									<AddUserForm addUser={addUser} />
									<h2 className="List">List of Contacts</h2>
									<UserTable users={users} viewRow={viewRow} editRow={editRow} deleteUser={deleteUser} />
								</Fragment>
								
							)
						)}
					</div>
				</div> 
				
			</div>
		
	)
}

export default App;
