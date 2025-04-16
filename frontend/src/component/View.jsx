import React, {useEffect, useState} from 'react'
import axios from 'axios'

const View = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        viewdata();

    },[]);

    const viewdata = async () => {
        try {
          const res = await axios.get('http://localhost:9000/users'); // Backend ka correct endpoint use karna
          setUsers(res.data);
        } catch (error) {
          console.error("Error fetching users:", error);
        }
      };


  return (
    <div >
      <h1>Show Data</h1>
      <table>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Age</th>
        </tr>
        {/* <tr key={users.id}>
            <th>user.id</th>
            <th>user.name</th>
            <th>user.age</th>
        </tr> */}

     {users.map((user)=>(
      <tr key = {user.id}>
        <th>{user.id}</th>
        <th style={{color:'pink'}}>{user.name}</th>
        <th style={{color:'pink'}}>{user.age}</th>
      </tr>
     ))}

      </table>
    </div>
  )
}

export default View
