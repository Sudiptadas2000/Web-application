import React from 'react'
import styles from './Header.module.css';
function Header() { //does not mandatory function name same as file name 
return (
    <div className={styles.head}> 
    <h1>Welcome to our first website</h1>
    <h3>Learn about Java</h3>
    </div>
)

}

export default Header
