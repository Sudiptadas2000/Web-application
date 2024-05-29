//ADD API
//axios means for handiling the http request
import React, { useState } from 'react'
import styles from './Contact.module.css';
import axios from 'axios';
import user_icon from '../images/person.png';
import email_icon from '../images/email.png';
import passward_icon from '../images/password.png';
function Contact() {
  //setting state
  const[firstName,setFname]=useState()
  const[lastName,setLname]=useState()
  const[email,setEmail]=useState()
  const[phone,setPhone]=useState()

  const Submit=(e)=>
    {
      e.preventDefault();
      axios.post(`http://localhost:4000/employees/addEmployee`,{firstName,lastName,email,phone})
      .then(result=>console.log(result))
    .catch(err=>console.log(err))
    }

  return (
    <>
      <div className={styles.container}>
      <div className={styles.header}>
      <div className={styles.text}>Add Employee Details</div>
      <div className={styles.underline}></div>
      </div>
      <form onSubmit={Submit}>
      <div className={styles.inputs}>
      <div className={styles.input}>
      <img src={user_icon} alt="" />
        <label></label>
        <input type='text'  onChange={(e)=>setFname(e.target.value)} placeholder='Enter first name' id='firstName' className='form-control'></input>
        <br></br>
        </div>
        <div className={styles.input}>
        <img src={user_icon} alt="" />
        <label></label>
        <input type='text'  onChange={(e)=>setLname(e.target.value)} placeholder='Enter last name' id='lastName' className='form-control'></input>
        <br></br>
        </div>
        <div className={styles.input}>
        <img src={email_icon} alt="" />
        <label></label>
        <input type='email' onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email' id='email' className='form-control'></input>
        <br></br>
          </div>
          <div className={styles.input}>
          <img src={passward_icon} alt="" />
        <label></label>
        <input type='text' name='phone' onChange={(e)=>setPhone(e.target.value)}  placeholder='Enter Phone no.' id='phone' className='form-comntrol'></input>
        <br></br>
        </div>
        </div>
        <button type='submit' value='Register' className={styles.btn}>Register Employee</button>
  
      </form>
      </div>
    </>
  )
}

export default Contact
