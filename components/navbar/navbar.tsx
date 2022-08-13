
import React, {useState} from 'react';
import Image from 'next/image';
import styles from  '../../styles/Navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>AGE OF EMPIRES</h1>
            <div className={styles.hamburger}>
                <div className={styles.stripe1}></div>
                <div className={styles.stripe2}></div>
                <div className={styles.stripe3}></div>
            </div>
        </div>
    )
}

export default Navbar;
