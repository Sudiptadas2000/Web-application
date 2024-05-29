//two types of components-1.functional and class component
import React from 'react'
import styles from'./Navbar.module.css';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <Link className={styles.link}to="/">Home</Link>
        <Link className={styles.link} to="/about">View Employees</Link>
        <Link className={styles.link} to="/contact">Add New Employee</Link>
        <Link className={styles.link} to="/service">Services</Link>
      </nav>
      </>
  )
}

export default Navbar
