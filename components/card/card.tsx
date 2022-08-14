
import React, {FunctionComponent} from 'react';
import styles from  '../../styles/Card.module.css';
import { Civilizations } from '../../resources/types';
import Link from 'next/link';

const Card:FunctionComponent<Civilizations> = ({name, id,}) => {
    return (
        <Link className={styles.card} href={{ pathname: '/civs', query: {id} }}>
            <h1 className={styles.title}>
                {name}
            </h1> 
        </Link>
    )
}

export default Card;
