//delete API 
import React, { useEffect, useState } from 'react'
import styles from'./About.module.css';
import axios from 'axios';
import {Link} from "react-router-dom";
function About() {
  //setting state
  const[users,setUsers]=useState([])
  
  useEffect(()=>{
    axios.get('http://localhost:4000/employees')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
},[]);

const handleDelete=(id)=>{
  axios.delete('http://localhost:4000/employees/deleteEmployee/'+id)
  .then(res=>{console.log(res)
    window.location.reload()})
  .catch(errr=>console.log(errr))
}
  return (
    <>
<div className={styles.content}>
      <table>
      <thead>
      <div className={styles.text1}>Delete and Update Employee Details</div>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Action</th>
        </tr>
      </thead>
        <tbody>
          {
            users.map((user)=>{
              return <tr>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className={styles.bttn}><Link to={`/update/${user._id}`}>Update</Link>&nbsp;&nbsp;</td>
                <button onClick={(e)=>handleDelete(user._id)} className={styles.btnn}>Delete</button>
              </tr>
            })
          }
        </tbody>
      </table>
      </div>
      <div className={styles.backgd}>
        <img src={require('../images/img.jpg')}></img>
      </div>
    </>
  )
}

export default About;
