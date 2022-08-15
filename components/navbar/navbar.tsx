
import React, {useState} from 'react';
import styles from  '../../styles/Navbar.module.css';

const Navbar = () => {
    const [stateNav, setStateNav] = useState<Boolean>(false);
    return (
        <div className={styles.navbar}>
            <h1>AGE OF EMPIRES</h1>
            <div className={styles.hamburger} onClick={() => setStateNav(!stateNav)}>
                <div className={stateNav ? styles.stripe1active : styles.stripe1}></div>
                <div className={stateNav ? styles.stripe2active : styles.stripe2}></div>
                <div className={stateNav ? styles.stripe3active : styles.stripe3}></div>
            </div>
            {stateNav && 
                <div className={styles.contentNav}>
                    <p> Hola</p>
                </div>
            }
            
        </div>
    )
}

export default Navbar;
