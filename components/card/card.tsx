
import React, {FunctionComponent, useState} from 'react';
import Image from 'next/image';
import styles from  '../../styles/Card.module.css';
import { Civilizations } from '../../resources/types';

const Card:FunctionComponent<Civilizations> = ({name, id}) => {
    return (
        <div className={styles.card}>
            <h1 className={styles.title}>{name}</h1>
        </div>
    )
}

export default Card;
