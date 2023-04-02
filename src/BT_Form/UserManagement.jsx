import React, {useState, useEffect} from 'react'
import Form from './Form'
import UserList from './UserList'
import Search from './Search'
import axios from "axios"

function UserManagement() {
    // state quản lý danh sách người dùng
    const [users, setUsers] = useState([]);

    const [selectedUser, setSelectedUser ] = useState({});

    const [searchByName, setSearchByName] = useState("");

    // Viết hàm call API để lấy danh sách users
    const fetchUsers = async (searchString)=>{
      try {
        const response = await axios.get("https://640cb0a694ce1239b0b3693a.mockapi.io/api/users",
        {
          params:{
            name: searchByName || undefined,
          },
        }
        );
        setUsers(response.data)
      } catch (error) {
        console.log(error);
      }
    }

    // Viết hàm xử lý nhận vào object user, thêm vào state users
    const handleSubmit = async (user) => {
      const { id, ...payload } = user;
  
      try {
        if (id) {
          // Cập nhật
          await axios.put(
            `https://640cb0a694ce1239b0b3693a.mockapi.io/api/users/${id}`,
            payload
          );
        } else {
          // Thêm mới
          await axios.post(
            "https://640cb0a694ce1239b0b3693a.mockapi.io/api/users",
            payload
          );
        }
        // Gọi hàm fetchUser sau khi call API create/update
        fetchUsers();
      } catch (error) {
        console.log(error);
      }
    };
    // Viết hàm xử lý nhận vào userId, xóa user có id bằng userId khỏi state users
    const handleDeleteUser = async (userId) =>{
      // const newUsers = users.filter((user)=> user.id !== userId);
      // setUsers(newUsers);
      try {
        await axios.delete(
          `https://640cb0a694ce1239b0b3693a.mockapi.io/api/users/${userId}`
        );
        fetchUsers();
      } catch (error) {
        console.log(error);
      }

    };

    const handleSelectUser = (user) => {
      setSelectedUser(user);
    };

    // Viết hàm xử lý nhận vào giá trị searchString
    const handleSearch = (searchString)=>{
      setSearchByName(searchString);
    };

    useEffect(()=>{
      fetchUsers();
    },[searchByName]);

  return (
    <div className='container-fluid'>
        <div className="card">
            <div className="card-header bg-dark text-white">Product Form</div>
            <div className="card-body">
                <Form key={selectedUser.id} user={selectedUser} onSubmit={handleSubmit} onReset={() => setSelectedUser({})} />
            </div>
        </div>
        <div className="mt-4">
            <Search onSearch={handleSearch}/>
        </div>
        <div className="mt-4">
              <UserList users={users} onDeleteUser={handleDeleteUser} onSelectUser={handleSelectUser}/>
        </div>
    </div>
  )
}

export default UserManagement