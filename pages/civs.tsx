import { useRouter } from 'next/router';
import React, {FunctionComponent, useEffect, useState} from 'react';
import fetchByName from '../resources/get';
import { Civilizations } from '../resources/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectCivilizations, setCivilizations } from '../store/slice';
import styles from '../styles/Home.module.css';

const Civs:FunctionComponent<Civilizations> = () => {
    const router = useRouter();
    const {civilizations} = useAppSelector(selectCivilizations);
    return (
        (
            <>
                {civilizations.map((array, index) => {
                    if(Number(array.id) === Number(router.query.id)) 
                    return (
                        <div className='container' key={index}>
                            <h1 className={styles.title}>{array.name}</h1>
                        </div>)
                    })
                }

            </>
        )
    )
}



export default Civs;
