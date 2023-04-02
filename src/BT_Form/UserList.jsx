import React from 'react'

function UserList({users, onDeleteUser, onSelectUser}) {
  return (
    <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
                <th>Image</th>
                <th>Price</th>
            </tr>
        </thead>
        <tbody>
            {users.map((user)=>{
                return (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.type}</td>
                        <td>{user.description}</td>
                        <td><img src={user.image} alt={user.name} style={{ height: '70px' }}/></td>
                        <td>{user.price}</td>
                        <td>
                            <button className='btn btn-warning me-2' onClick={()=> onSelectUser(user)}>Edit</button>
                            <button className='btn btn-danger' onClick={()=> onDeleteUser(user.id)}>Delete</button>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
  )
}

export default UserList